'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Subanswer extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Subanswer.init(
    {
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0
      }
    },

    // Configuration
    {
      sequelize,
      modelName: 'subanswer'
    }
  )
}
