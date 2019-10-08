'use strict'

const Sequelize = require('sequelize')
const connectionDB = require('../lib/db')
class Geopolitics extends Sequelize.Model {}

module.exports = config => {
  const sequelize = connectionDB(config)

  return Geopolitics.init(
    {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        validate: { isUUID: 4 }
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      population: {
        type: Sequelize.INTEGER,
        allowNull: true,
        default: 0
      },
      division_name: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      in_uuid: {
        type: Sequelize.UUID,
        references: {
          model: 'geopolitics',
          key: 'uuid',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      }
    },
    {
      sequelize,
      modelName: 'geopolitic'
    }
  )
}
