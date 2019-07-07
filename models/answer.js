'use strict'

// Respuestas a una pregunta o subpregunta de una propuesta

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Answer extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Answer.init(
    {
      content: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      sequelize,
      modelName: 'answer'
    }
  )
}
