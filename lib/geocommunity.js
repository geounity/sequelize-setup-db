'use strict'
const uuidV4 = require('uuid/v4')

module.exports = function GeocommunityService (GeocommunityModel) {
  async function create (obj) {
    let created = await GeocommunityModel.create({
      uuid: uuidV4(),
      name: obj.name,
      level: obj.level,
      geocommunityId: obj.geocommunity_id
    })
    return created || Promise.reject(new Error('error'))
  }

  async function getContinents () {
    let result = await GeocommunityModel.findAll({
      where: {
        level: 2
      },
      attributes: ['name']
    })
    return result || Promise.reject(new Error('error'))
  }

  async function getIdByName (name, level) {
    return GeocommunityModel.findOrCreate({
      where: {
        name,
        level
      },
      defaults: {
        uuid: uuidV4(),
        geocommunityId: level - 1
      }
    }).then(([community, created]) => {
      if (created) {
        console.log('Nuevos continentes: ' + community.name)
      }
      return community.id
    })
  }

  async function getCountriesByContinent (continent) {
    const id = await this.getIdByName(continent, 2)
    let countries = await GeocommunityModel.findAll({
      where: { geocommunity_id: id },
      attributes: ['name']
    })
    console.log('RETORNANDO ALGO')
    console.log(countries)
    return countries
  }

  return {
    create,
    getContinents,
    getIdByName,
    getCountriesByContinent
  }
}
