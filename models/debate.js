'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Debate extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Debate.init(
    {
      type: {
        type: Sequelize.ENUM,
        values: ['geopolitics', 'idelogics', 'bussines'], // Define un filtro para los puntos de vista
        allowNull: false
      },
      public: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      title: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(1000),
        unique: false,
        allowNull: true
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING(30)),
        allowNull: true
      },
      char_min: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2
      },
      char_max: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 200
      }
    },

    // Configuración
    {
      sequelize,
      modelName: 'debate'
    }
  )
}
