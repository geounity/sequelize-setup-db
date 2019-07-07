'use strict'

// Usuario del sistema

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')

module.exports = config => {
  const sequelize = connectionDB(config)

  return sequelize.define(
    'user',
    {
      authid: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(15),
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 3,
          max: 15
        },
        set (val) {
          this.setDataValue('username', val.toLowerCase())
        }
      },
      email: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false,
        validate: { notEmpty: true, isEmail: true }
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: true,
        validate: { notEmpty: true }
      },
      lastname: {
        type: Sequelize.STRING(50),
        allowNull: true,
        validate: { notEmpty: true }
      },
      datebirth: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.NOW
      }
    },

    {}
  )
}
