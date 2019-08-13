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
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: new Date()
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: new Date()
    }
  },
  {
    sequelize,
    modelName: 'state',
    timestamps: false
  })
}
