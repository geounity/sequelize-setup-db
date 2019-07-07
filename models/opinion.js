'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Opinion extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Opinion.init(
    {
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      votes_up: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      votes_down: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },

    {
      sequelize,
      modelName: 'opinion'
    }
  )
}
