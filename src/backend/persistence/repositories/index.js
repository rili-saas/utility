import AbstractRepository from "./abstract";

export default class Repository extends AbstractRepository {
  constructor(database, tableName) {
    super(database, tableName);
  }
}
