'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')

module.exports = config => {
  const sequelize = connectionDB(config)

  return sequelize.define(
    'state',
    {
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      }
    },

    {}
  )
}
