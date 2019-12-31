'use strict'

const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')

class DrinkTypeRepository extends BaseRepository {

  constructor(model) {
    super(model)
    this.$model = model;
  }

}

ioc.singleton('DrinkTypeRepository', function(app) {
  const model = app.use('App/Models/DrinkType')
  return new DrinkTypeRepository(model)
})

module.exports = ioc.use('DrinkTypeRepository')

