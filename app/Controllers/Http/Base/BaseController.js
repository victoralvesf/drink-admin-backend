'use strict'

class BaseController {

  constructor(repository) {
    this.repository = repository
  }

  async index({response}) {
    return this.repository.index(response)
  }

  async store({request, response}) {
    return this.repository.store(request, response)
  }

  async show({params, response}){
    return this.repository.show(params, response)
  }

  async update({params, request, response}){
    return this.repository.update(params, request, response)
  }

  async destroy({params, response}){
    return this.repository.destroy(params, response)
  }
}

module.exports = BaseController
