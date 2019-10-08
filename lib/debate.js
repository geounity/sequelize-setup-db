'use strict'

module.exports = function setupDebateService (DebateModel, UserModel) {
  async function saveDebate (idUser, debate) {
    const user = await UserModel.findOne({
      where: { id: idUser }
    })
    if (user) {
      // let existingTitle = await this.findByTitle(debate.title)
      const existingTitle = await DebateModel.findOne({
        where: { title: debate.title }
      })
      if (!existingTitle) {
        Object.assign(debate, { user_id: user.id })
        const newDebate = await DebateModel.create(debate)
        return newDebate
      }
      return Promise.reject(new Error('Title debate exists yet'))
    }
    return Promise.reject(new Error('User not exists'))
  }

  function findByTitle (title) {
    return DebateModel.findOne({
      where: {
        title
      }
    })
  }

  function findByUserId (id) {
    return DebateModel.findAll({
      attributes: ['type', 'public', 'title', 'votes_up', 'votes_down', 'create_at'],
      include: [{
        attributes: [],
        model: UserModel,
        where: {
          id
        }
      }],
      raw: true
    })
  }

  return {
    saveDebate,
    findByTitle,
    findByUserId
  }
}
