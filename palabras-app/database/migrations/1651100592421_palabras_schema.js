'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PalabrasSchema extends Schema {
  up () {
    this.create('palabras', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('palabras')
  }
}

module.exports = PalabrasSchema
