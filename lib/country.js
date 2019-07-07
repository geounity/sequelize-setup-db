'use strict'

module.exports = function setupCountryService (CountryModel, SocietyModel) {
  async function saveCountry (country) {
    let name = country.name
    let c = {
      name,
      alpha: country.alpha2Code, // alpha2Code
      data: country // Aca tendria que borrar el nombre y la abr2 porque ya esta guardada en columnas sql
    }
    let existing = await CountryModel.findOne({
      where: { name }
    })
    if (!existing) {
      let created = await CountryModel.create(c)
      if (created) {
        let society = {
          type: 'country',
          community_id: created.id
        }
        await SocietyModel.create(society)
        return created
      }
      return Promise.reject(new Error('error'))
    } else {
      return Promise.reject(new Error('Country exists with same name'))
    }
  }

  async function getCountries () {
    let q = await CountryModel.findAll({
      attributes: ['name'],
      raw: true
    })
    return q || Promise.reject(new Error('No hay paises cargados'))
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
    saveCountry,
    getCountries,
    getNameByContinent
  }
}
