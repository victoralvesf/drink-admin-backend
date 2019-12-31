'use strict'

const DrinkTypeRepository = use('App/Repositories/DrinkTypeRepository')
const BaseController = require('./Base/BaseController')

class DrinkTypeController extends BaseController {

  constructor() {
    super(DrinkTypeRepository)
  }

}

module.exports = DrinkTypeController
