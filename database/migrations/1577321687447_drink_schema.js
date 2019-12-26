'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DrinkSchema extends Schema {
  up () {
    this.create('drinks', (table) => {
      table.increments()
      table.string('brand', 40)
      table.string('flavor', 30)
      table.decimal('price')
      table.integer('milimiters')
      table.bigInteger('quantity').defaultTo(0)
      table.integer('type_id').unsigned()
      table.timestamps()

      table.foreign('type_id').references('id').inTable('drink_types')
    })
  }

  down () {
    this.drop('drinks')
  }
}

module.exports = DrinkSchema

