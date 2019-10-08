'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class PointOfView extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return PointOfView.init(
    {
      name: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      cant_people: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0
      }
    },

    // Configuración
    {
      sequelize,
      modelName: 'point_of_view'
    }
  )
}
