'use strict'

const _ = require('lodash')

class _DatabaseOperations {

  constructor(model) {
    this.model = model
    this.noRecordFound = 'No record found'
  }

  async index(response) {
    const result = await this.model.all()
    return response.json(result)
  }

  async store(request, response) {
    const input = request.except(['password_confirmation'])
    const modelObject = new this.model()

    _.forEach(input, function(e,i) {
      modelObject[i] = e
    })

    await modelObject.save()

    return response.status(201).json({
      message: `${this.model.name} created successfully`,
      data: modelObject
    })
  }

  async show(params, response) {
    const modelObject = await this.model.find(params.id)

    if(!modelObject) {
      return response.status(404).json({ message: this.noRecordFound })
    }

    return response.json({ data: modelObject })
  }

  async update(params, request, response) {
    const input = request.all()
    const modelObject = await this.model.find(params.id)

    if(!modelObject) {
      return response.status(404).json({ message: this.noRecordFound })
    }

    /*
    * Is necessary to validate the fields using Validator on each route.
    * Because empty fields are not allowed.
    */

    _.forEach(input, function(e,i) {
      modelObject[i] = e
    })

    await modelObject.save()

    return response.status(200).json({
      message: `${this.model.name} has been updated`,
      data: modelObject
    })
  }

  async destroy(params, response) {
    const modelObject = await this.model.find(params.id)

    if(!modelObject) {
      return response.status(404).json({ message: this.noRecordFound })
    }

    await modelObject.delete()

    return response.status(200).json({
      message: `${this.model.name} deleted`,
      data: modelObject
    })
  }

}

module.exports = _DatabaseOperations
