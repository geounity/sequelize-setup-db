'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')

module.exports = (config) => {
  const sequelize = connectionDB(config)

  return sequelize.define('country', {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    alpha: {
      type: Sequelize.STRING(2),
      unique: true,
      allowNull: false
    },
    data: {
      type: Sequelize.JSONB,
      allowNull: false
    }
  },

  {

  })
}
