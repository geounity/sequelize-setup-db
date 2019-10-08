'use strict'

module.exports = function GeopoliticService (GeopoliticModel) {
  async function create (obj) {
    const created = await GeopoliticModel.create(obj)
    return created || Promise.reject(new Error(`Geopolitic exists with same name ${obj.name}`))
  }

  async function getContinents () {
    const result = await GeopoliticModel.findAll({
      where: {
        level: 2
      }
    })
    return result || Promise.reject(new Error('No cant read the continents'))
  }

  async function getCountries () {
    const result = await GeopoliticModel.findAll({
      where: {
        level: 3
      }
    })
    return result || Promise.reject(new Error('No cant read the continents'))
  }

  async function getByLevel (level) {
    return GeopoliticModel.findOne({
      where: { level }
    }) || Promise.reject(new Error('Error, no find by level'))
  }

  async function getUuidByNameAndLevel (name, level) {
    const result = await GeopoliticModel.findOne({
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
    const countries = await GeopoliticModel.findAll({
      where: { geopolitic_id: uuid }
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
