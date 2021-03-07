(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('aws-sdk'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'aws-sdk', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@ciro-maciel/utility'] = {}, global['aws-sdk'], global.react));
}(this, (function (exports, awsSdk, react) { 'use strict';

  const validate = (resolver) => {
    const baseResolver = resolver;

    baseResolver.validate = (childResolver) => {
      const newResolver = async (parent, args, context, info) => {
        await resolver(parent, args, context, info);

        return childResolver(parent, args, context, info);
      };

      return validate(newResolver);
    };

    return baseResolver;
  };

  var authentication = validate((_, __, { auth }) => {
    if (!auth || !auth.authenticated) {
      const {
        message = "Not Authenticated",
        code = "NOT_AUTHENTICATED",
        status = 401,
      } = auth || {};

      const error = new Error(message);

      error.code = code;
      error.status = status;

      throw error;
    }
  });

  class Authorization {
    constructor(authorizationStrategy) {
      this.authorization = authorizationStrategy;
    }

    verify(data) {
      return this.authorization(data);
    }
  }

  var cucAuthorizationStrategy = (data) => {
    if (!data) {
      const error = new Error("The cuc is missing");

      error.code = "MISSING_CUC";
      error.status = 401;

      throw error;
    }

    return {
      account: data,
      authenticated: true,
    };
  };

  const jwt = require("jsonwebtoken");

  const { SECRET } = process.env;

  var jwtAuthorizationStrategy = (token) => {
    if (!token) {
      const error = new Error("The api token is missing");

      error.code = "MISSING_TOKEN";
      error.status = 401;

      throw error;
    }

    let verify = null;
    let authenticated = false;

    const parts = token.split(" ");

    if (!parts.length === 2) {
      const error = new Error("The api token is invalid");

      error.code = "INVALID_TOKEN";
      error.status = 401;

      throw error;
    }

    const [type, data] = parts;

    if (type !== "Bearer") {
      const error = new Error("The api token is malformatted");

      error.code = "MALFORMATTED_TOKEN";
      error.status = 401;

      throw error;
    }

    try {
      verify = jwt.verify(data, SECRET);
      authenticated = !!verify;
    } catch (err) {}

    return {
      ...verify,
      authenticated,
    };
  };

  var management = {
    cucAuthorizationStrategy,
    jwtAuthorizationStrategy,
    authentication,
    Authorization,
  };

  const IS_OFFLINE = process.env.IS_OFFLINE;

  class Dynamo {
    constructor(
      settings = {
        convertEmptyValues: true,
      }
    ) {
      // connect to local DB if running offline
      if (IS_OFFLINE) {
        settings.region = "localhost";
        settings.endpoint = "http://localhost:4040";
        settings.accessKeyId = "DEFAULT_ACCESS_KEY";
        settings.secretAccessKey = "DEFAULT_SECRET";
      }
      awsSdk.config.update(settings);
      try {
        const dynamo = new awsSdk.DynamoDB();

        const client = new awsSdk.DynamoDB.DocumentClient();

        Object.assign(this, { client, dynamo });
      } catch (error) {
        console.error(error);

        throw error;
      }
    }

    static parseOperator(operator) {
      switch (operator) {
        case "startswith":
          return "BEGINS_WITH";
        case "contains":
          return "CONTAINS";
        case "in":
          return "IN";
        case "between":
          return "BETWEEN";
        case "neq":
          return "NE";
        case "gt":
          return "GT";
        case "gte":
          return "GE";
        case "lt":
          return "LT";
        case "lte":
          return "LE";
        case "isnotnull":
          return "NOT_NULL";
        case "isnull":
          return "NULL";
        default:
          return "EQ";
      }
    }

    static parseValue(filter) {
      try {
        if (
          typeof filter.value === "string" &&
          filter.value.includes(",") &&
          filter.operator === "in"
        ) {
          return filter.value
            .split(",")
            .map((value) => (filter.type === "N" ? parseFloat(value) : value));
        }
      } catch (error) {
        console.error(error, filter);
        throw error;
      }

      switch (filter.type) {
        case "N":
          return [parseFloat(filter.value)];
        case "B":
          return [!!parseFloat(filter.value)];
        default:
          return [filter.value];
      }
    }

    static parseFilter(filter) {
      return filter
        .filter(({ value }) => !!value)
        .reduce(
          (accum, curr) => ({
            ...accum,
            [curr.field]: {
              ComparisonOperator: this.parseOperator(curr.operator),
              AttributeValueList: this.parseValue(curr),
            },
          }),
          {}
        );
    }

    async createTable(tableName, options = {}) {
      const params = {
        TableName: tableName,
        KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
        AttributeDefinitions: [{ AttributeName: "id", AttributeType: "N" }],
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
      };

      if (options.indexes) {
        params.globalIndexes = options.indexes
          .filter({ type: "global" })
          .keyBy("name")
          .value();
        params.secondaryIndexes = options.indexes
          .filter({ type: "local" })
          .keyBy("name")
          .value();
      }
      try {
        return this.dynamo.createTable(params).promise();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

    async deleteTable(tableName) {
      try {
        return this.dynamo.deleteTable({ TableName: tableName }).promise();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

    withTable(tableName) {
      this.tableName = tableName;

      return this;
    }

    async put(data) {
      try {
        return await this.client
          .put({
            TableName: this.tableName,
            Item: data,
          })
          .promise();
      } catch (error) {
        console.error(error, data);
        throw error;
      }
    }

    // async updateByKey(key, data) {
    //   const dataClean = omitBy(
    //     data,
    //     (item, keyName) => Object.keys(key).includes(keyName) || isNil(item)
    //   );
    //   const dataAttrs = Object.keys(dataClean);
    //   const expressionAttributeNames = dataAttrs.reduce(
    //     (acc, keyName) => ({
    //       ...acc,
    //       [`#${keyName}`]: keyName,
    //     }),
    //     {}
    //   );

    //   const updateExpression = `set ${dataAttrs
    //     .map((keyName) => `#${keyName} = :${keyName}`)
    //     .join(", ")}`;

    //   const expressionAttributeValues = dataAttrs.reduce(
    //     (acc, keyName) => ({
    //       ...acc,
    //       [`:${keyName}`]: dataClean[keyName],
    //     }),
    //     {}
    //   );

    //   return this.update(key, {
    //     updateExpression,
    //     expressionAttributeNames,
    //     expressionAttributeValues,
    //   });
    // }

    async update(
      key,
      {
        updateExpression,
        expressionAttributeNames,
        expressionAttributeValues,
        returnValues = "UPDATED_NEW",
      }
    ) {
      const params = {
        TableName: this.tableName,
        Key: key,
        UpdateExpression: updateExpression,
        ExpressionAttributeNames: expressionAttributeNames,
        ExpressionAttributeValues: expressionAttributeValues,
        ReturnValues: returnValues,
      };

      try {
        const result = await this.client.update(params).promise();

        return result.Attributes;
      } catch (error) {
        console.error(error);

        throw error;
      }
    }

    async delete(key, condition) {
      const params = {
        TableName: this.tableName,
        Key: key,
      };

      if (condition) {
        (params.ConditionExpression = condition.expression),
          (params.ExpressionAttributeValues = condition.values);
      }

      await this.client.delete(params).promise();

      return true;
    }

    async findByKey(key) {
      const params = {
        TableName: this.tableName,
        Key: key,
      };

      const result = await this.client.get(params).promise();

      return result.Item;
    }

    async get(key) {
      const params = {
        TableName: this.tableName,
        Key: key,
      };

      const result = await this.client.get(params).promise();

      return result.Item;
    }

    async findAll() {
      const response = await this.client
        .scan({
          TableName: this.tableName,
        })
        .promise();

      return response.Items;
    }

    async filter({
      indexName = null,
      filter = null,
      limit = null,
      skip = null,
      sort = null,
      attributesToGetString = null,
      lean = false,
    }) {
      const {
        KeyConditionExpression,
        ExpressionAttributeNames,
        ExpressionAttributeValues,
        FilterExpression,
      } = parseFilterToExpressions(filter);

      const params = removeEmptyStringAndNullElements({
        TableName: this.tableName,
        IndexName: indexName,
        KeyConditionExpression,
        ExpressionAttributeNames,
        ExpressionAttributeValues,
        FilterExpression,
        ProjectionExpression: attributesToGetString,
      });

      const { Count: count } = await this.client
        .query({
          ...params,
          Select: "COUNT",
        })
        .promise();

      if (sort) {
        params.ScanIndexForward = sort.dir !== "desc";
      }

      if (limit) {
        params.Limit = limit;
      }

      if (skip) {
        params.ExclusiveStartKey = skip;
      }

      let response = await this.client.query(params).promise();
      let items = [...response.Items];

      process.env.STAGE === "test" && console.log("params", params);
      process.env.STAGE === "test" && console.log("response", response);

      if (response.LastEvaluatedKey) {
        while (response.LastEvaluatedKey) {
          params.ExclusiveStartKey = response.LastEvaluatedKey;
          response = await this.client.query(params).promise();

          process.env.STAGE === "test" && console.log("w - params", params);
          process.env.STAGE === "test" && console.log("w - response", response);

          if (limit && items.length + response.Items.length > limit) {
            const itensToCopy = limit - items.length;

            items = items.concat(response.Items.slice(0, itensToCopy));

            response.LastEvaluatedKey = null;
          } else {
            items = items.concat(response.Items);
          }
        }
      }

      return {
        count,
        items,
      };
    }
  }

  const removeEmptyStringAndNullElements = (obj) => {
    for (const prop in obj) {
      if (typeof obj[prop] === "object" && obj[prop] !== null) {
        // dive deeper in
        if (!Object.keys(obj[prop]).length) {
          delete obj[prop];
        } else {
          removeEmptyStringAndNullElements(obj[prop]);
        }
      } else if (
        obj[prop] === "" ||
        obj[prop] === null ||
        obj[prop] === undefined
      ) {
        // delete elements that are empty strings
        delete obj[prop];
      }
    }
    return obj;
  };

  const parseConditionalExpression = ({ type, operator, field, value }) => {
    if ("A".includes(type)) {
      let result = "(";

      value.forEach((item, idx) => {
        result += `contains(#${field}, :${field}${idx})`;

        result += idx !== value.length - 1 ? " or " : "";
      });

      return result + ")";
    }

    switch (operator) {
      case "startswith":
        return `begins_with(#${field}, :${field})`;
      case "contains":
        return `contains(#${field}, :${field})`;
      case "in":
        return `#${field} IN (${value
        .split(",")
        .map((_, index) => `:${field}${index}`)
        .join(",")})`;
      case "between":
        return `#${field} BETWEEN ${value
        .split(",")
        .map((_, index) => `:${field}${index}`)
        .join(" AND ")}`;
      case "neq":
        return `#${field} <> :${field}`;
      case "gt":
        return `#${field} > :${field}`;
      case "gte":
        return `#${field} >= :${field}`;
      case "lt":
        return `#${field} < :${field}`;
      case "lte":
        return `#${field} <= :${field}`;
      case "isnotnull":
        return `NOT attribute_type(#${field}, :${field})`;
      case "isnull":
        return `attribute_type(#${field}, :${field})`;
      default:
        return `#${field} = :${field}`;
    }
  };

  const genMapFieldsIn = (rootAcc, commaStr, keyPrefix, fieldName, fieldType) => {
    return {
      ...rootAcc,
      ...commaStr.split(",").reduce(
        (acc, value, index) => ({
          ...acc,
          [`${keyPrefix}${fieldName}${index}`]:
            fieldType === "N" ? parseFloat(value) : value,
        }),
        {}
      ),
    };
  };

  const genMapFields = (
    filters = [],
    keyPrefix = "#",
    keyName = "field",
    keyValueName = "field"
  ) => {
    return filters.reduce((acc, item) => {
      const isValue = keyPrefix === ":";

      if (isValue && ["isnotnull", "isnull"].includes(item.operator)) {
        return { ...acc, [`${keyPrefix}${item[keyName]}`]: "NULL" };
      }
      if (isValue && ["between", "in"].includes(item.operator)) {
        return genMapFieldsIn(acc, item.value, keyPrefix, item.field, item.type);
      }

      if (isValue && "A".includes(item.type)) {
        let result = { ...acc };

        item.value.forEach((itemValue, idx) => {
          result[`${keyPrefix}${item[keyName]}${idx}`] = itemValue;
        });

        return result;
      }

      return {
        ...acc,
        [`${keyPrefix}${item[keyName]}`]: !isValue
          ? item[keyValueName]
          : item.type === "N"
          ? parseFloat(item[keyValueName])
          : item.type === "B"
          ? item[keyValueName] === "true"
          : item[keyValueName],
      };
    }, {});
  };

  const parseFilterToExpressions = (filters = []) => {
    // filters = filters.filter(({ operator, value }) => ["isnotnull", "isnull"].includes(operator) || !!value );

    const keysFieldsSelected = [];

    const keyConditionExpression = filters.filter(
      ({ operator, isKey, field }, index) => {
        if (
          (isKey || index === 0) &&
          (!operator ||
            !["startswith", "contains", "in", "neq"].includes(operator))
        ) {
          return keysFieldsSelected.push(field) > 0;
        }
        return false;
      }
    );

    const filterExpression = filters.filter(
      ({ field }) => !keysFieldsSelected.includes(field)
    );
    const ExpressionAttributeNames = genMapFields(filters, "#", "field", "field");

    const KeyConditionExpression = `${keyConditionExpression
    .map(parseConditionalExpression)
    .join(" and ")}`;

    const FilterExpression = `${filterExpression
    .map(parseConditionalExpression)
    .join(" and ")}`;

    const ExpressionAttributeValues = genMapFields(
      filters,
      ":",
      "field",
      "value"
    );
    return {
      KeyConditionExpression,
      ExpressionAttributeNames,
      ExpressionAttributeValues,
      FilterExpression,
    };
  };

  var databases = { Dynamo };

  class AbstractRepository {
    constructor(database, tableName) {
      Object.assign(this, { database, tableName });
    }

    async findByKey(id) {
      return this.database.withTable(this.tableName).findByKey(id);
    }

    async findAll() {
      return this.database.withTable(this.tableName).findAll();
    }

    async filter({
      indexName,
      limit,
      skip,
      sort,
      filter,
      attributesToGetString,
    }) {
      return this.database.withTable(this.tableName).filter({
        indexName,
        limit,
        skip,
        sort,
        filter,
        attributesToGetString,
      });
    }

    async put(data) {
      return this.database.withTable(this.tableName).put(data);
    }

    async delete(key) {
      return this.database.withTable(this.tableName).delete(key);
    }
  }

  class Repository extends AbstractRepository {
    constructor(database, tableName) {
      super(database, tableName);
    }
  }

  class UnitOfWork {
    constructor(database, tableName) {
      Object.assign(this, { database, tableName });

      this.constructor.container = new Map();
    }

    repository() {
      const { container } = this.constructor;

      const repository = new Repository(this.database, this.tableName);

      container.set(this.tableName, repository);

      return repository;
    }
  }

  var persistence = { databases, UnitOfWork };

  var index$2 = { management, persistence };

  // https://stackoverflow.com/a/53180013/8589328

  var useUpdate = (fn, inputs) => {
    const didMountRef = react.useRef(false);

    react.useEffect(() => {
      if (didMountRef.current) fn();
      else didMountRef.current = true;
    }, inputs);
  };

  var hooks = { useUpdate };

  var index$1 = { hooks };

  var math = {
    // http://www.ietf.org/rfc/rfc4122.txt
    guid: function guid(length, radix) {
      var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
          ""
        ),
        uuid = [],
        i;
      radix = radix || chars.length;

      if (length) {
        for (i = 0; i < length; i++) {
          uuid[i] = chars[0 | (Math.random() * radix)];
        }
      } else {
        var r;

        uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
        uuid[14] = "4";

        for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r = 0 | (Math.random() * 16);
            uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
          }
        }
      }

      return uuid.join("").toLowerCase();
    },
  };

  var string = {
    // https://stackoverflow.com/questions/36637146/javascript-encode-string-to-hex
    toHex: function (tmp) {
      var str = "";
      for (var i = 0; i < tmp.length; i++) {
        str += tmp[i].charCodeAt(0).toString(16);
      }
      return str;
    },
    // https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  };

  var func = {
    // https://davidwalsh.name/javascript-debounce-function
    debounce: function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
  };

  var network = {
    // http://ccoenraets.github.io/es6-tutorial-data/promisify/
    // http://stackoverflow.com/questions/28921127/how-to-wait-for-a-javascript-promise-to-resolve-before-resuming-function
    // https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest
    request: function (obj) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        if (obj.headers) {
          Object.keys(obj.headers).forEach(function (key) {
            xhr.setRequestHeader(key, obj.headers[key]);
          });
        }
        xhr.onload = function () {
          // console.log(xhr.getAllResponseHeaders());

          // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
          resolve({
            code: xhr.status,
            message: xhr.response || xhr.responseText,
          });

          // if (xhr.status >= 200 && xhr.status < 300) {
          //     resolve(xhr.response);
          // } else {
          //     reject(xhr.statusText);
          // }
        };

        xhr.onerror = function () {
          reject(xhr.statusText);
        };
        xhr.send(obj.body);
      });
    },
    info: {
      data: null,
      load: function () {
        utility.net
          .request({
            // url:
            //   "http://api.ipstack.com/check?access_key=4e033eb864b6a92fa9027da214a67ccc&format=1"
            // url: "https://freegeoip.net/json/"
            url: "https://ipapi.co/json/",
          })
          .then(function (data) {
            if (data.code === 200) {
              utility.net.info.data = JSON.parse(data.message);
              // console.log(utility.net.info.data)
            }
          })
          .catch(function (error) {
            utility.net.info.data = {};
          });
      },
    },
  };

  var http = {
    response: (payload, type = "json") => {
      if (type === "json") {
        return {
          statusCode: 200,
          body: JSON.stringify({
            payload,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        };
      } else {
        return {
          statusCode: 200,
          body: payload,
          isBase64Encoded: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-disposition": `attachment; filename=${new Date().toISOString()}.${
            type === "img" ? "jpg" : "pdf"
          }`,
            "Content-Type": type === "img" ? "image/jpg" : "application/pdf",
          },
        };
      }
    },
    size: (base64String) => {
      let padding, inBytes, base64StringLength;
      if (base64String.endsWith("==")) padding = 2;
      else if (base64String.endsWith("=")) padding = 1;
      else padding = 0;

      base64StringLength = base64String.length;
      inBytes = (base64StringLength / 4) * 3 - padding;
      const kbytes = inBytes / 1000;
      return kbytes;
    },
  };

  var index = { math, string, func, network, http };

  exports.backEnd = index$2;
  exports.frontEnd = index$1;
  exports.utility = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
