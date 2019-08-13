'use strict'

// const uuid = require('uuid-base62')
// const utils = require('./utils')

module.exports = function setupUserService (UserModel) {
  // function _saveImage (image, callback) {}
  // Guarda la foto de perfil del usuario

  function findById (id) {
    return UserModel.findById(id)
  }

  function findByUsername (username) {
    return UserModel.findOne({
      where: {
        username
      }
    })
  }

  function findByEmail (email) {
    return UserModel.findOne({
      where: {
        email
      }
    })
  }

  function findByName (name) {
    return UserModel.findAll({
      where: {
        name
      }
    })
  }

  function findConnected () {
    return UserModel.findAll({
      where: {
        connected: true
      }
    })
  }

  function findAll () {
    return UserModel.findAll()
  }

  async function saveUser (user) {
    let cond = {
      where: { username: user.username }
    }
    let existingUser = await UserModel.findOne(cond)
    if (!existingUser) {
      let newUser = (await UserModel.create(user)).toJSON()
      return newUser
    }
    return Promise.reject(new Error('User already exists'))
  }

  async function addPhotoURL (username, photo) {
    let result = await UserModel.update({
      photo
    },
    {
      where: { username }
    })
    return result || Promise.reject(new Error('Photo no add'))
  }

  async function addAditionalInfo (username, info) {
    let result = await UserModel.update({
      name: info.name,
      lastname: info.lastname,
      datebirth: info.datebirth,
      service: info.service
    },
    {
      where: { username }
    }
    )
    return result || Promise.reject(new Error('Info user no add'))
  }

  return {
    findById,
    findByUsername,
    findByEmail,
    findByName,
    findConnected,
    findAll,
    saveUser,
    addPhotoURL,
    addAditionalInfo
  }
}
