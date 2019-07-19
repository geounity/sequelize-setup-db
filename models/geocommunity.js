'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Geocommunity extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Geocommunity.init(
    {
      uuid: {
        type: Sequelize.UUID,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'geocommunity'
    }
  )
}
