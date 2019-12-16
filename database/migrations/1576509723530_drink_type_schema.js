'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DrinkTypeSchema extends Schema {
  up () {
    this.create('drink_types', (table) => {
      table.increments()
      table.string('name').unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('drink_types')
  }
}

module.exports = DrinkTypeSchema
