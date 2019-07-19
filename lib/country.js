'use strict'

module.exports = function setupCountryService (CountryModel) {
  async function create (country) {
    let name = country.name
    let existing = await CountryModel.findOne({
      where: { name }
    })
    if (!existing) {
      let created = await CountryModel.create(country)
      return created || Promise.reject(new Error('error'))
    } else {
      return Promise.reject(new Error('Country exists with same name'))
    }
  }

  async function getAllCountries () {
    let q = await CountryModel.findAll({
      attributes: ['name', 'flag'],
      raw: true
    })
    return q || Promise.reject(new Error('No hay paises cargados'))
  }

  async function getByCode (code) {
    let q = await CountryModel.findOne({
      where: {
        code
      },
      raw: true
    })
    return q || Promise.reject(new Error('No se encontro país para el code'))
  }

  async function getByContinent (continent) {
    let q = await CountryModel.findAll({
      attributes: ['name', 'flag'],
      where: {
        in_continent: continent
      },
      raw: true
    })
    return q || Promise.reject(new Error('No se encentran paises en ese continente'))
  }

  async function getBySubregion (subregion) {
    let q = await CountryModel.findAll({
      attributes: ['name', 'flag'],
      where: {
        subregion: subregion
      },
      raw: true
    })
    return q || Promise.reject(new Error('No se encentran paises en ese continente'))
  }

  async function getNameByContinent (continent) {
    let q = await CountryModel.findAll({
      attributes: ['name'],
      where: {
        data: {
          region: continent
        }
      },
      raw: true
    })
    return q || Promise.reject(new Error('No se encentran paises en ese continente'))
  }

  return {
    create,
    getAllCountries,
    getByCode,
    getByContinent,
    getBySubregion,
    getNameByContinent
  }
}
