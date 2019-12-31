'use strict'

const DrinkRepository = use('App/Repositories/DrinkRepository')
const BaseController = require('./Base/BaseController')

class DrinkController extends BaseController {

  constructor() {
    super(DrinkRepository)
  }

}

module.exports = DrinkController
