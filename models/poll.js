'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Poll extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Poll.init(
    {
      title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      public: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      questions: {
        // Esto va a contener una referencia a FireStore
        type: Sequelize.STRING(100),
        allowNull: false
      }
    },

    {
      sequelize,
      modelName: 'poll'
    }
  )
}
