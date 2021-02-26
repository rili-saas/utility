module.exports = class Authorization {
  constructor(authorizationStrategy) {
    this.authorization = authorizationStrategy
  }

  verify(data) {
    return this.authorization(data)
  }
}
