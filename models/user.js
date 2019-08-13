'use strict'

// Usuario del sistema

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')

module.exports = config => {
  const sequelize = connectionDB(config)

  return sequelize.define(
    'user',
    {
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
      },
      lastname: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      service: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      id_doc_firestore: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      photo: {
        type: Sequelize.STRING(400),
        allowNull: true
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
