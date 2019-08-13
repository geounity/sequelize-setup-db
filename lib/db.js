'use strict'

const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDatabase (config) {
  // Singleton: Si ya existe una conección no la vuelve a crear
  // De esa forma evito multiples instancias
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}
