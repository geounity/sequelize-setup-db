'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Organization extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Organization.init(
    {
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cant_people: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },

    {
      sequelize,
      modelName: 'organization'
    }
  )
}
