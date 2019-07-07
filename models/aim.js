'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Aim extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Aim.init(
    {
      public: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING(30)),
        allowNull: true
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
      modelName: 'aim'
    }
  )
}
