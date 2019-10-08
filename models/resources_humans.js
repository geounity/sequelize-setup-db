'use strict'

// Son los usuarios que se ofrecen como voluntarios para desarrollar cierta meta

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class resourcesHuman extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return resourcesHuman.init(
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
      modelName: 'resources_human'
    }
  )
}
