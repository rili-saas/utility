const authentication = require("./authentication");
const Authorization = require("./authorization");
const cucAuthorizationStrategy = require("./authorization/cuc-strategy");
const jwtAuthorizationStrategy = require("./authorization/jwt-strategy");

module.exports = {
  authentication,
  Authorization,
  cucAuthorizationStrategy,
  jwtAuthorizationStrategy,
};
