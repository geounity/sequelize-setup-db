'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')

module.exports = (config) => {
  const sequelize = connectionDB(config)

  return sequelize.define('country', {
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    code: {
      type: Sequelize.STRING(2),
      unique: true,
      allowNull: true
    },
    flag: {
      type: Sequelize.STRING(40),
      unique: true,
      allowNull: true
    },
    in_continent: {
      type: Sequelize.STRING(15),
      allowNull: false
    },
    subregion: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  },

  {

  })
}
