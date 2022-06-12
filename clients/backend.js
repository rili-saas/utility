'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var awsSdk = require('aws-sdk');

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

const { JWT_SECRET } = process.env;

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
    verify = jwt.verify(data, JWT_SECRET);
    authenticated = !!verify;
  } catch (err) {}

  return {
    ...verify,
    authenticated,
  };
};

var index$1 = {
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

  async count() {
    // https://docs.aws.amazon.com/pt_br/amazondynamodb/latest/developerguide/Query.html
    // let { Count: count } = await this.client
    //   .query({
    //     ...params,
    //     Select: "COUNT",
    //   })
    //   .promise();
    // count = count + response.Count;
    // response.LastEvaluatedKey = null;
    // }
  }

  async filter({
    indexName = null,
    filter = null,
    limit = null,
    skip = null,
    sort = null,
    attributesToGetString = null,
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
    let items = response.Items;

    process.env.STAGE === "test" && console.log("params", params);
    process.env.STAGE === "test" && console.log("response", response);

    while (response.LastEvaluatedKey) {
      params.ExclusiveStartKey = response.LastEvaluatedKey;
      response = await this.client.query(params).promise();

      process.env.STAGE === "test" && console.log("p - params", params);
      process.env.STAGE === "test" && console.log("p - response", response);

      if (limit && items.length + response.Items.length > limit) {
        const itensToCopy = limit - items.length;

        items = items.concat(response.Items.slice(0, itensToCopy));

        break;
      } else {
        items = items.concat(response.Items);
      }
    }

    return {
      hasMore: !!response.LastEvaluatedKey,
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

var index = { databases, UnitOfWork };

exports.management = index$1;
exports.persistence = index;
