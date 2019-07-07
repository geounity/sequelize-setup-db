'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class GeoCommunity extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return GeoCommunity.init(
    {
      uuid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      community_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'geo_communities',
          key: 'id'
        },
        allowNull: true
      }
    },

    {
      sequelize,
      modelName: 'geo_community'
    }
  )
}
