'use strict'

// Recursive table

// Level Region
// 0     Global
// 1     Country
// 2     State, provincia, departamento
// 3     Municipios, etc
// last   user, individuo

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Region extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Region.init(
    {
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cant_people: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      geolocation: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },

    {
      sequelize,
      modelName: 'region'
    }
  )
}
