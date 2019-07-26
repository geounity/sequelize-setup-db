'use strict'

module.exports = function GeocommunityService (GeocommunityModel) {
  async function create (obj) {
    let existing = await GeocommunityModel.findOne({
      where: {
        name: obj.name,
        level: obj.level
      }
    })
    if (!existing) {
      let created = await GeocommunityModel.create(obj)
      return created || Promise.reject(new Error('Error'))
    }
    return Promise.reject(new Error(`Geocommunity exists with same name ${obj.name}`))
  }

  async function getContinents () {
    let result = await GeocommunityModel.findAll({
      where: {
        level: 2
      }
    })
    return result || Promise.reject(new Error('No cant read the continents'))
  }

  async function getCountries () {
    let result = await GeocommunityModel.findAll({
      where: {
        level: 3
      }
    })
    return result || Promise.reject(new Error('No cant read the continents'))
  }

  async function getByLevel (level) {
    return GeocommunityModel.findOne({
      where: { level }
    }) || Promise.reject(new Error('Error, no find by level'))
  }

  async function getUuidByNameAndLevel (name, level) {
    let result = await GeocommunityModel.findOne({
      where: {
        name,
        level
      },
      attributes: ['uuid'],
      raw: true
    })
    return result.uuid || Promise.reject(new Error('Error, no find by level'))
  }

  async function getCountriesByContinent (continent) {
    const uuid = await this.getUuidByNameAndLevel(continent, 2)
    let countries = await GeocommunityModel.findAll({
      where: { geocommunity_id: uuid }
    })
    return countries || Promise.reject(new Error('No cant find countries by continents'))
  }

  return {
    create,
    getContinents,
    getCountries,
    getByLevel,
    getUuidByNameAndLevel,
    getCountriesByContinent
  }
}
