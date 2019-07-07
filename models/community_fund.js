'use strict'

// Fondo comunitario de dinero para comprar los recursos necesarios para realizar una idea

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class communityFund extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return communityFund.init(
    {
      cant: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      cant_need: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },

    {
      sequelize,
      modelName: 'community_fund'
    }
  )
}
