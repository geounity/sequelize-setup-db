// Preguntas acerca de la propuesta (aim)

'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Question extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Question.init(
    {
      question: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    },

    // Configuration
    {
      sequelize,
      modelName: 'question'
    }
  )
}
