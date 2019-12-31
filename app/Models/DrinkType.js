'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DrinkType extends Model {
  drink() {
    return this.hasMany('App/Models/Drink', 'type_id', 'id')
  }
}

module.exports = DrinkType
