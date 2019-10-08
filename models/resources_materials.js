'use strict'

// Son los materiales que se necesitan para desarrollar cierta meta

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class resourcesMaterial extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return resourcesMaterial.init(
    {
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING(30)),
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      cant: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },

    {
      sequelize,
      modelName: 'resources_material'
    }
  )
}
