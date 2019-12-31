'use strict'

const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')

class DrinkRepository extends BaseRepository {

  constructor(model) {
    super(model)
    this.$model = model;
  }

}

ioc.singleton('DrinkRepository', function(app) {
  const model = app.use('App/Models/Drink')
  return new DrinkRepository(model)
})

module.exports = ioc.use('DrinkRepository')

