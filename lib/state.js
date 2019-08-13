'use strict'

module.exports = function setupStateService (StateModel) {
  async function getAllStates () {
    let q = await StateModel.findAll({
      raw: true
    })
    return q || Promise.reject(new Error('No hay países cargados'))
  }

  async function getAllByCountry (id) {
    let q = await StateModel.findAll({
      where: {
        country_id: id
      },
      raw: true
    })
    return q || Promise.reject(new Error(`No se encontraron los estados para el país con id ${id}`))
  }

  return {
    getAllStates,
    getAllByCountry
  }
}
