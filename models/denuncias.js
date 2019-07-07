'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Denuncia extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Denuncia.init(
    {
      object: {
        // Ojbeto que denuncia, puede ser una opinion en un debate, una pregunta o una respuesta
        type: Sequelize.CHAR(10),
        allowNull: false
      },
      asunto: {
        type: Sequelize.STRING(100)
      }
    },

    {
      sequelize,
      modelName: 'denuncia'
    }
  )
}
