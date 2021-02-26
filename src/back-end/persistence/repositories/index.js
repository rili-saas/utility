const AbstractRepository = require("./abstract");

module.exports = class Repository extends (
  AbstractRepository
) {
  constructor(database, tableName) {
    super(database, tableName);
  }
};
