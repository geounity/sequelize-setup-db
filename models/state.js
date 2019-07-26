'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class State extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)
  return State.init({
    state: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'state'
  })
}
