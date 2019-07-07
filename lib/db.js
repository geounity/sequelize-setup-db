'use strict'

const Sequelize = require('sequelize')
let connectionDB = null

module.exports = function setupDatabase (config) {
  // Singleton: Si ya existe una conección no la vuelve a crear
  // De esa forma evito multiples instancias
  if (!connectionDB) {
    connectionDB = new Sequelize(config)
  }
  return connectionDB
}
