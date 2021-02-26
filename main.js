"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "management", {
  enumerable: true,
  get: function get() {
    return _management["default"];
  }
});
Object.defineProperty(exports, "persistence", {
  enumerable: true,
  get: function get() {
    return _persistence["default"];
  }
});

var _management = _interopRequireDefault(require("./management"));

var _persistence = _interopRequireDefault(require("./persistence"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var validate = function validate(resolver) {
  var baseResolver = resolver;

  baseResolver.validate = function (childResolver) {
    var newResolver = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, args, context, info) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return resolver(parent, args, context, info);

              case 2:
                return _context.abrupt("return", childResolver(parent, args, context, info));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function newResolver(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }();

    return validate(newResolver);
  };

  return baseResolver;
};

var _default = validate(function (_, __, _ref2) {
  var auth = _ref2.auth;

  if (!auth || !auth.authenticated) {
    var _ref3 = auth || {},
        _ref3$message = _ref3.message,
        message = _ref3$message === void 0 ? "Not Authenticated" : _ref3$message,
        _ref3$code = _ref3.code,
        code = _ref3$code === void 0 ? "NOT_AUTHENTICATED" : _ref3$code,
        _ref3$status = _ref3.status,
        status = _ref3$status === void 0 ? 401 : _ref3$status;

    var error = new Error(message);
    error.code = code;
    error.status = status;
    throw error;
  }
});

exports["default"] = _default;
"use strict";

module.exports = function (data) {
  if (!data) {
    var error = new Error('The cuc is missing');
    error.code = 'MISSING_CUC';
    error.status = 401;
    throw error;
  }

  return {
    user: data,
    authenticated: true
  };
};
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var jwt = require("jsonwebtoken");

var SECRET = process.env.SECRET;

module.exports = function (token) {
  if (!token) {
    var error = new Error("The api token is missing");
    error.code = "MISSING_TOKEN";
    error.status = 401;
    throw error;
  }

  var verify = null;
  var authenticated = false;
  var parts = token.split(" ");

  if (!parts.length === 2) {
    var _error = new Error("The api token is invalid");

    _error.code = "INVALID_TOKEN";
    _error.status = 401;
    throw _error;
  }

  var _parts = _slicedToArray(parts, 2),
      type = _parts[0],
      data = _parts[1];

  if (type !== "Bearer") {
    var _error2 = new Error("The api token is malformatted");

    _error2.code = "MALFORMATTED_TOKEN";
    _error2.status = 401;
    throw _error2;
  }

  try {
    verify = jwt.verify(data, SECRET);
    authenticated = !!verify;
  } catch (err) {}

  return _objectSpread(_objectSpread({}, verify), {}, {
    authenticated: authenticated
  });
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function Authorization(authorizationStrategy) {
    _classCallCheck(this, Authorization);

    this.authorization = authorizationStrategy;
  }

  _createClass(Authorization, [{
    key: "verify",
    value: function verify(data) {
      return this.authorization(data);
    }
  }]);

  return Authorization;
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "authentication", {
  enumerable: true,
  get: function get() {
    return _authentication["default"];
  }
});
Object.defineProperty(exports, "Authorization", {
  enumerable: true,
  get: function get() {
    return _authorization["default"];
  }
});
Object.defineProperty(exports, "cucAuthorizationStrategy", {
  enumerable: true,
  get: function get() {
    return _cucStrategy["default"];
  }
});
Object.defineProperty(exports, "jwtAuthorizationStrategy", {
  enumerable: true,
  get: function get() {
    return _jwtStrategy["default"];
  }
});

var _authentication = _interopRequireDefault(require("./authentication"));

var _authorization = _interopRequireDefault(require("./authorization"));

var _cucStrategy = _interopRequireDefault(require("./authorization/cuc-strategy"));

var _jwtStrategy = _interopRequireDefault(require("./authorization/jwt-strategy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("aws-sdk"),
    config = _require.config,
    DynamoDB = _require.DynamoDB;

var _require2 = require("lodash"),
    omitBy = _require2.omitBy,
    isNil = _require2.isNil;

var IS_OFFLINE = process.env.IS_OFFLINE;

var Database = /*#__PURE__*/function () {
  function Database() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      convertEmptyValues: true
    };

    _classCallCheck(this, Database);

    // connect to local DB if running offline
    if (IS_OFFLINE) {
      settings.region = "localhost";
      settings.endpoint = "http://localhost:4040";
      settings.accessKeyId = "DEFAULT_ACCESS_KEY";
      settings.secretAccessKey = "DEFAULT_SECRET";
    }

    config.update(settings);

    try {
      var dynamo = new DynamoDB();
      var client = new DynamoDB.DocumentClient();
      Object.assign(this, {
        client: client,
        dynamo: dynamo
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  _createClass(Database, [{
    key: "createTable",
    value: function () {
      var _createTable = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(tableName) {
        var options,
            params,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                params = {
                  TableName: tableName,
                  KeySchema: [{
                    AttributeName: "id",
                    KeyType: "HASH"
                  }],
                  AttributeDefinitions: [{
                    AttributeName: "id",
                    AttributeType: "N"
                  }],
                  ProvisionedThroughput: {
                    ReadCapacityUnits: 5,
                    WriteCapacityUnits: 5
                  }
                };

                if (options.indexes) {
                  params.globalIndexes = options.indexes.filter({
                    type: "global"
                  }).keyBy("name").value();
                  params.secondaryIndexes = options.indexes.filter({
                    type: "local"
                  }).keyBy("name").value();
                }

                _context.prev = 3;
                return _context.abrupt("return", this.dynamo.createTable(params).promise());

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](3);
                console.error(_context.t0);
                throw _context.t0;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 7]]);
      }));

      function createTable(_x) {
        return _createTable.apply(this, arguments);
      }

      return createTable;
    }()
  }, {
    key: "deleteTable",
    value: function () {
      var _deleteTable = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(tableName) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                return _context2.abrupt("return", this.dynamo.deleteTable({
                  TableName: tableName
                }).promise());

              case 4:
                _context2.prev = 4;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);
                throw _context2.t0;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 4]]);
      }));

      function deleteTable(_x2) {
        return _deleteTable.apply(this, arguments);
      }

      return deleteTable;
    }()
  }, {
    key: "withTable",
    value: function withTable(tableName) {
      this.tableName = tableName;
      return this;
    }
  }, {
    key: "put",
    value: function () {
      var _put = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.client.put({
                  TableName: this.tableName,
                  Item: data
                }).promise();

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0, data);
                throw _context3.t0;

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function put(_x3) {
        return _put.apply(this, arguments);
      }

      return put;
    }()
  }, {
    key: "updateByKey",
    value: function () {
      var _updateByKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(key, data) {
        var dataClean, dataAttrs, expressionAttributeNames, updateExpression, expressionAttributeValues;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dataClean = omitBy(data, function (item, keyName) {
                  return Object.keys(key).includes(keyName) || isNil(item);
                });
                dataAttrs = Object.keys(dataClean);
                expressionAttributeNames = dataAttrs.reduce(function (acc, keyName) {
                  return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, "#".concat(keyName), keyName));
                }, {});
                updateExpression = "set ".concat(dataAttrs.map(function (keyName) {
                  return "#".concat(keyName, " = :").concat(keyName);
                }).join(", "));
                expressionAttributeValues = dataAttrs.reduce(function (acc, keyName) {
                  return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, ":".concat(keyName), dataClean[keyName]));
                }, {});
                return _context4.abrupt("return", this.update(key, {
                  updateExpression: updateExpression,
                  expressionAttributeNames: expressionAttributeNames,
                  expressionAttributeValues: expressionAttributeValues
                }));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateByKey(_x4, _x5) {
        return _updateByKey.apply(this, arguments);
      }

      return updateByKey;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(key, _ref) {
        var updateExpression, expressionAttributeNames, expressionAttributeValues, _ref$returnValues, returnValues, params, result;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                updateExpression = _ref.updateExpression, expressionAttributeNames = _ref.expressionAttributeNames, expressionAttributeValues = _ref.expressionAttributeValues, _ref$returnValues = _ref.returnValues, returnValues = _ref$returnValues === void 0 ? "UPDATED_NEW" : _ref$returnValues;
                params = {
                  TableName: this.tableName,
                  Key: key,
                  UpdateExpression: updateExpression,
                  ExpressionAttributeNames: expressionAttributeNames,
                  ExpressionAttributeValues: expressionAttributeValues,
                  ReturnValues: returnValues
                };
                _context5.prev = 2;
                _context5.next = 5;
                return this.client.update(params).promise();

              case 5:
                result = _context5.sent;
                return _context5.abrupt("return", result.Attributes);

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](2);
                console.error(_context5.t0);
                throw _context5.t0;

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 9]]);
      }));

      function update(_x6, _x7) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(key, condition) {
        var params;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                params = {
                  TableName: this.tableName,
                  Key: key
                };

                if (condition) {
                  params.ConditionExpression = condition.expression, params.ExpressionAttributeValues = condition.values;
                }

                _context6.next = 4;
                return this.client["delete"](params).promise();

              case 4:
                return _context6.abrupt("return", true);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _delete(_x8, _x9) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "findByKey",
    value: function () {
      var _findByKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(key) {
        var params, result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                params = {
                  TableName: this.tableName,
                  Key: key
                };
                _context7.next = 3;
                return this.client.get(params).promise();

              case 3:
                result = _context7.sent;
                return _context7.abrupt("return", result.Item);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function findByKey(_x10) {
        return _findByKey.apply(this, arguments);
      }

      return findByKey;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(key) {
        var params, result;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                params = {
                  TableName: this.tableName,
                  Key: key
                };
                _context8.next = 3;
                return this.client.get(params).promise();

              case 3:
                result = _context8.sent;
                return _context8.abrupt("return", result.Item);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function get(_x11) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "findAll",
    value: function () {
      var _findAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var response;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.client.scan({
                  TableName: this.tableName
                }).promise();

              case 2:
                response = _context9.sent;
                return _context9.abrupt("return", response.Items);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function findAll() {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
  }, {
    key: "filter",
    value: function () {
      var _filter2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_ref2) {
        var _ref2$indexName, indexName, _ref2$filter, _filter, _ref2$limit, limit, _ref2$skip, skip, _ref2$sort, sort, _ref2$attributesToGet, attributesToGetString, _ref2$lean, lean, _parseFilterToExpress, KeyConditionExpression, ExpressionAttributeNames, ExpressionAttributeValues, FilterExpression, params, _yield$this$client$qu, count, response, items, itensToCopy;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _ref2$indexName = _ref2.indexName, indexName = _ref2$indexName === void 0 ? null : _ref2$indexName, _ref2$filter = _ref2.filter, _filter = _ref2$filter === void 0 ? null : _ref2$filter, _ref2$limit = _ref2.limit, limit = _ref2$limit === void 0 ? null : _ref2$limit, _ref2$skip = _ref2.skip, skip = _ref2$skip === void 0 ? null : _ref2$skip, _ref2$sort = _ref2.sort, sort = _ref2$sort === void 0 ? null : _ref2$sort, _ref2$attributesToGet = _ref2.attributesToGetString, attributesToGetString = _ref2$attributesToGet === void 0 ? null : _ref2$attributesToGet, _ref2$lean = _ref2.lean, lean = _ref2$lean === void 0 ? false : _ref2$lean;
                _parseFilterToExpress = parseFilterToExpressions(_filter), KeyConditionExpression = _parseFilterToExpress.KeyConditionExpression, ExpressionAttributeNames = _parseFilterToExpress.ExpressionAttributeNames, ExpressionAttributeValues = _parseFilterToExpress.ExpressionAttributeValues, FilterExpression = _parseFilterToExpress.FilterExpression;
                params = removeEmptyStringAndNullElements({
                  TableName: this.tableName,
                  IndexName: indexName,
                  KeyConditionExpression: KeyConditionExpression,
                  ExpressionAttributeNames: ExpressionAttributeNames,
                  ExpressionAttributeValues: ExpressionAttributeValues,
                  FilterExpression: FilterExpression,
                  ProjectionExpression: attributesToGetString
                });
                _context10.next = 5;
                return this.client.query(_objectSpread(_objectSpread({}, params), {}, {
                  Select: "COUNT"
                })).promise();

              case 5:
                _yield$this$client$qu = _context10.sent;
                count = _yield$this$client$qu.Count;

                if (sort) {
                  params.ScanIndexForward = sort.dir !== "desc";
                }

                if (limit) {
                  params.Limit = limit;
                }

                if (skip) {
                  params.ExclusiveStartKey = skip;
                }

                _context10.next = 12;
                return this.client.query(params).promise();

              case 12:
                response = _context10.sent;
                items = _toConsumableArray(response.Items);
                process.env.STAGE === "test" && console.log("params", params);
                process.env.STAGE === "test" && console.log("response", response);

                if (!response.LastEvaluatedKey) {
                  _context10.next = 27;
                  break;
                }

              case 17:
                if (!response.LastEvaluatedKey) {
                  _context10.next = 27;
                  break;
                }

                params.ExclusiveStartKey = response.LastEvaluatedKey;
                _context10.next = 21;
                return this.client.query(params).promise();

              case 21:
                response = _context10.sent;
                process.env.STAGE === "test" && console.log("w - params", params);
                process.env.STAGE === "test" && console.log("w - response", response);

                if (limit && items.length + response.Items.length > limit) {
                  itensToCopy = limit - items.length;
                  items = items.concat(response.Items.slice(0, itensToCopy));
                  response.LastEvaluatedKey = null;
                } else {
                  items = items.concat(response.Items);
                }

                _context10.next = 17;
                break;

              case 27:
                return _context10.abrupt("return", {
                  count: count,
                  items: items
                });

              case 28:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function filter(_x12) {
        return _filter2.apply(this, arguments);
      }

      return filter;
    }()
  }], [{
    key: "parseOperator",
    value: function parseOperator(operator) {
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
  }, {
    key: "parseValue",
    value: function parseValue(filter) {
      try {
        if (typeof filter.value === "string" && filter.value.includes(",") && filter.operator === "in") {
          return filter.value.split(",").map(function (value) {
            return filter.type === "N" ? parseFloat(value) : value;
          });
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
  }, {
    key: "parseFilter",
    value: function parseFilter(filter) {
      var _this = this;

      return filter.filter(function (_ref3) {
        var value = _ref3.value;
        return !!value;
      }).reduce(function (accum, curr) {
        return _objectSpread(_objectSpread({}, accum), {}, _defineProperty({}, curr.field, {
          ComparisonOperator: _this.parseOperator(curr.operator),
          AttributeValueList: _this.parseValue(curr)
        }));
      }, {});
    }
  }]);

  return Database;
}();

exports["default"] = Database;

var removeEmptyStringAndNullElements = function removeEmptyStringAndNullElements(obj) {
  for (var prop in obj) {
    if (_typeof(obj[prop]) === "object" && obj[prop] !== null) {
      // dive deeper in
      if (!Object.keys(obj[prop]).length) {
        delete obj[prop];
      } else {
        removeEmptyStringAndNullElements(obj[prop]);
      }
    } else if (obj[prop] === "" || obj[prop] === null || obj[prop] === undefined) {
      // delete elements that are empty strings
      delete obj[prop];
    }
  }

  return obj;
};

var parseConditionalExpression = function parseConditionalExpression(_ref4) {
  var type = _ref4.type,
      operator = _ref4.operator,
      field = _ref4.field,
      value = _ref4.value;

  if ("A".includes(type)) {
    var result = "(";
    value.forEach(function (item, idx) {
      result += "contains(#".concat(field, ", :").concat(field).concat(idx, ")");
      result += idx !== value.length - 1 ? " or " : "";
    });
    return result + ")";
  }

  switch (operator) {
    case "startswith":
      return "begins_with(#".concat(field, ", :").concat(field, ")");

    case "contains":
      return "contains(#".concat(field, ", :").concat(field, ")");

    case "in":
      return "#".concat(field, " IN (").concat(value.split(",").map(function (_, index) {
        return ":".concat(field).concat(index);
      }).join(","), ")");

    case "between":
      return "#".concat(field, " BETWEEN ").concat(value.split(",").map(function (_, index) {
        return ":".concat(field).concat(index);
      }).join(" AND "));

    case "neq":
      return "#".concat(field, " <> :").concat(field);

    case "gt":
      return "#".concat(field, " > :").concat(field);

    case "gte":
      return "#".concat(field, " >= :").concat(field);

    case "lt":
      return "#".concat(field, " < :").concat(field);

    case "lte":
      return "#".concat(field, " <= :").concat(field);

    case "isnotnull":
      return "NOT attribute_type(#".concat(field, ", :").concat(field, ")");

    case "isnull":
      return "attribute_type(#".concat(field, ", :").concat(field, ")");

    default:
      return "#".concat(field, " = :").concat(field);
  }
};

var genMapFieldsIn = function genMapFieldsIn(rootAcc, commaStr, keyPrefix, fieldName, fieldType) {
  return _objectSpread(_objectSpread({}, rootAcc), commaStr.split(",").reduce(function (acc, value, index) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, "".concat(keyPrefix).concat(fieldName).concat(index), fieldType === "N" ? parseFloat(value) : value));
  }, {}));
};

var genMapFields = function genMapFields() {
  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";
  var keyName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "field";
  var keyValueName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "field";
  return filters.reduce(function (acc, item) {
    var isValue = keyPrefix === ":";

    if (isValue && ["isnotnull", "isnull"].includes(item.operator)) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, "".concat(keyPrefix).concat(item[keyName]), "NULL"));
    }

    if (isValue && ["between", "in"].includes(item.operator)) {
      return genMapFieldsIn(acc, item.value, keyPrefix, item.field, item.type);
    }

    if (isValue && "A".includes(item.type)) {
      var result = _objectSpread({}, acc);

      item.value.forEach(function (itemValue, idx) {
        result["".concat(keyPrefix).concat(item[keyName]).concat(idx)] = itemValue;
      });
      return result;
    }

    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, "".concat(keyPrefix).concat(item[keyName]), !isValue ? item[keyValueName] : item.type === "N" ? parseFloat(item[keyValueName]) : item.type === "B" ? item[keyValueName] === "true" : item[keyValueName]));
  }, {});
};

var parseFilterToExpressions = function parseFilterToExpressions() {
  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // filters = filters.filter(({ operator, value }) => ["isnotnull", "isnull"].includes(operator) || !!value );
  var keysFieldsSelected = [];
  var keyConditionExpression = filters.filter(function (_ref5, index) {
    var operator = _ref5.operator,
        isKey = _ref5.isKey,
        field = _ref5.field;

    if ((isKey || index === 0) && (!operator || !["startswith", "contains", "in", "neq"].includes(operator))) {
      return keysFieldsSelected.push(field) > 0;
    }

    return false;
  });
  var filterExpression = filters.filter(function (_ref6) {
    var field = _ref6.field;
    return !keysFieldsSelected.includes(field);
  });
  var ExpressionAttributeNames = genMapFields(filters, "#", "field", "field");
  var KeyConditionExpression = "".concat(keyConditionExpression.map(parseConditionalExpression).join(" and "));
  var FilterExpression = "".concat(filterExpression.map(parseConditionalExpression).join(" and "));
  var ExpressionAttributeValues = genMapFields(filters, ":", "field", "value");
  return {
    KeyConditionExpression: KeyConditionExpression,
    ExpressionAttributeNames: ExpressionAttributeNames,
    ExpressionAttributeValues: ExpressionAttributeValues,
    FilterExpression: FilterExpression
  };
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Dynamo", {
  enumerable: true,
  get: function get() {
    return _dynamo["default"];
  }
});

var _dynamo = _interopRequireDefault(require("./dynamo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "databases", {
  enumerable: true,
  get: function get() {
    return _databases["default"];
  }
});
Object.defineProperty(exports, "UnitOfWork", {
  enumerable: true,
  get: function get() {
    return _unityOfWork["default"];
  }
});

var _databases = _interopRequireDefault(require("./databases"));

var _unityOfWork = _interopRequireDefault(require("./unity-of-work"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AbstractRepository = /*#__PURE__*/function () {
  function AbstractRepository(database, tableName) {
    _classCallCheck(this, AbstractRepository);

    Object.assign(this, {
      database: database,
      tableName: tableName
    });
  }

  _createClass(AbstractRepository, [{
    key: "findByKey",
    value: function () {
      var _findByKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.database.withTable(this.tableName).findByKey(id));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findByKey(_x) {
        return _findByKey.apply(this, arguments);
      }

      return findByKey;
    }()
  }, {
    key: "findAll",
    value: function () {
      var _findAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.database.withTable(this.tableName).findAll());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findAll() {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
  }, {
    key: "filter",
    value: function () {
      var _filter2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref) {
        var indexName, limit, skip, sort, _filter, attributesToGetString;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                indexName = _ref.indexName, limit = _ref.limit, skip = _ref.skip, sort = _ref.sort, _filter = _ref.filter, attributesToGetString = _ref.attributesToGetString;
                return _context3.abrupt("return", this.database.withTable(this.tableName).filter({
                  indexName: indexName,
                  limit: limit,
                  skip: skip,
                  sort: sort,
                  filter: _filter,
                  attributesToGetString: attributesToGetString
                }));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function filter(_x2) {
        return _filter2.apply(this, arguments);
      }

      return filter;
    }()
  }, {
    key: "put",
    value: function () {
      var _put = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.database.withTable(this.tableName).put(data));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function put(_x3) {
        return _put.apply(this, arguments);
      }

      return put;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(key) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.database.withTable(this.tableName)["delete"](key));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return AbstractRepository;
}();

exports["default"] = AbstractRepository;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _abstract = _interopRequireDefault(require("./abstract"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Repository = /*#__PURE__*/function (_AbstractRepository) {
  _inherits(Repository, _AbstractRepository);

  var _super = _createSuper(Repository);

  function Repository(database, tableName) {
    _classCallCheck(this, Repository);

    return _super.call(this, database, tableName);
  }

  return Repository;
}(_abstract["default"]);

exports["default"] = Repository;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _repositories = _interopRequireDefault(require("./repositories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UnitOfWork = /*#__PURE__*/function () {
  function UnitOfWork(database, tableName) {
    _classCallCheck(this, UnitOfWork);

    Object.assign(this, {
      database: database,
      tableName: tableName
    });
    this.constructor.container = new Map();
  }

  _createClass(UnitOfWork, [{
    key: "repository",
    value: function repository() {
      var container = this.constructor.container;
      var repository = new _repositories["default"](this.database, this.tableName);
      container.set(this.tableName, repository);
      return repository;
    }
  }]);

  return UnitOfWork;
}();

exports["default"] = UnitOfWork;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useUpdate", {
  enumerable: true,
  get: function get() {
    return _useUpdate["default"];
  }
});

var _useUpdate = _interopRequireDefault(require("./use-update"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

// https://stackoverflow.com/a/53180013/8589328
var _default = function _default(fn, inputs) {
  var didMountRef = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (didMountRef.current) fn();else didMountRef.current = true;
  }, inputs);
};

exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "hooks", {
  enumerable: true,
  get: function get() {
    return _hooks["default"];
  }
});

var _hooks = _interopRequireDefault(require("./hooks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "backEnd", {
  enumerable: true,
  get: function get() {
    return _backEnd["default"];
  }
});
Object.defineProperty(exports, "frontEnd", {
  enumerable: true,
  get: function get() {
    return _frontEnd["default"];
  }
});
Object.defineProperty(exports, "utility", {
  enumerable: true,
  get: function get() {
    return _utility["default"];
  }
});

var _backEnd = _interopRequireDefault(require("./back-end"));

var _frontEnd = _interopRequireDefault(require("./front-end"));

var _utility = _interopRequireDefault(require("./utility"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  // https://davidwalsh.name/javascript-debounce-function
  debounce: function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "math", {
  enumerable: true,
  get: function get() {
    return _math["default"];
  }
});
Object.defineProperty(exports, "string", {
  enumerable: true,
  get: function get() {
    return _string["default"];
  }
});
Object.defineProperty(exports, "function", {
  enumerable: true,
  get: function get() {
    return _function["default"];
  }
});
Object.defineProperty(exports, "network", {
  enumerable: true,
  get: function get() {
    return _network["default"];
  }
});

var _math = _interopRequireDefault(require("./math"));

var _string = _interopRequireDefault(require("./string"));

var _function = _interopRequireDefault(require("./function"));

var _network = _interopRequireDefault(require("./network"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  // http://www.ietf.org/rfc/rfc4122.txt
  guid: function guid(length, radix) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        uuid = [],
        i;
    radix = radix || chars.length;

    if (length) {
      for (i = 0; i < length; i++) {
        uuid[i] = chars[0 | Math.random() * radix];
      }
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";

      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
        }
      }
    }

    return uuid.join("").toLowerCase();
  }
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  // http://ccoenraets.github.io/es6-tutorial-data/promisify/
  // http://stackoverflow.com/questions/28921127/how-to-wait-for-a-javascript-promise-to-resolve-before-resuming-function
  // https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest
  request: function request(obj) {
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
          message: xhr.response || xhr.responseText
        }); // if (xhr.status >= 200 && xhr.status < 300) {
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
    load: function load() {
      utility.net.request({
        // url:
        //   "http://api.ipstack.com/check?access_key=4e033eb864b6a92fa9027da214a67ccc&format=1"
        // url: "https://freegeoip.net/json/"
        url: "https://ipapi.co/json/"
      }).then(function (data) {
        if (data.code === 200) {
          utility.net.info.data = JSON.parse(data.message); // console.log(utility.net.info.data)
        }
      })["catch"](function (error) {
        utility.net.info.data = {};
      });
    }
  }
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  // https://stackoverflow.com/questions/36637146/javascript-encode-string-to-hex
  toHex: function toHex(tmp) {
    var str = "";

    for (var i = 0; i < tmp.length; i++) {
      str += tmp[i].charCodeAt(0).toString(16);
    }

    return str;
  },
  // https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
  capitalize: function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};
exports["default"] = _default;
