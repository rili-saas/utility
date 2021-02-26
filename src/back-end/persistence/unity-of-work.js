const Repository = require("./repositories");
module.exports = class UnitOfWork {
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
};
