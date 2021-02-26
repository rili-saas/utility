export default class AbstractRepository {
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
