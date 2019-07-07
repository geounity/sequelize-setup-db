'use strict'

module.exports = function setupStateService (StateModel, SocietyModel) {
  async function saveState (name, countryId) {
    let state = {
      name,
      country_id: countryId
    }
    let existing = await StateModel.findOne({
      where: { name }
    })
    if (!existing) {
      let created = await StateModel.create(state)
      if (created) {
        let society = {
          area: 'state',
          society_id: created.id
        }
        await SocietyModel.create(society)
        return created
      }
      return Promise.reject(new Error('error'))
    }
  }

  return {
    saveState
  }
}
