'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Donation extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Donation.init(
    {
      cant: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      asunto: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },

    {
      sequelize,
      modelName: 'donation'
    }
  )
}
