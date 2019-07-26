'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Country extends Sequelize.Model { }

module.exports = config => {
  const sequelize = connectionDB(config)
  return Country.init({
    code: {
      type: Sequelize.CHAR(2),
      allowNull: false
    },
    country: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'country'
  })
}
