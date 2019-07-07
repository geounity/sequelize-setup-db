'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Subquestion extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Subquestion.init(
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
      modelName: 'subquestion'
    }
  )
}
