'use strict'

// Usuario del sistema

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class User extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return User.init(
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
        type: Sequelize.STRING(254),
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true,
          max: 254
        }
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      lastname: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      service: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      id_doc_firestore: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      photo: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      datebirth: {
        type: Sequelize.DATEONLY,
        allowNull: true
      }
    },

    // Configuration
    {
      sequelize,
      modelName: 'user'
    }
  )
}
