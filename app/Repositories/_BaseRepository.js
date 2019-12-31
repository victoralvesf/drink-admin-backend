'use strict'

const DatabaseOperations = use('App/Repositories/_DatabaseOperations')

class _BaseRepository {

  constructor(model) {
    this.dbObject = new DatabaseOperations(model)
  }

  async index(response) {
    return this.dbObject.index(response)
  }

  async store(request, response) {
    return this.dbObject.store(request, response)
  }

  async show(params, response) {
    return this.dbObject.show(params, response)
  }

  async update(params, request, response) {
    return this.dbObject.update(params, request, response)
  }

  async destroy(params, response) {
    return this.dbObject.destroy(params, response)
  }
}

module.exports = _BaseRepository
