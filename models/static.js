'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Static extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Static.init(
    {
      public: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      title: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false
      },
      data: {
        type: Sequelize.JSON,
        allowNull: false
      },
      likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    },

    // Configuración
    {
      sequelize,
      modelName: 'static'
    }
  )
}
