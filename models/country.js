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
    },
    population: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    flag: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    in_continent: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    subregion: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    division_name: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    cant_states: {
      type: Sequelize.INTEGER,
      allowNull: true
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
    modelName: 'country',
    timestamps: false
  }
  )
}
