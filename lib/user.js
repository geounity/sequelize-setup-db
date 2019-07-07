'use strict'

// const uuid = require('uuid-base62')
const utils = require('./utils')

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

  async function authenticate (username, password) {
    const cond = {
      where: {
        username
      }
    }
    let user = await UserModel.findOne(cond)
    if (!user) {
      return Promise.reject(new Error('User not exist'))
    }
    if (user.password === utils.encrypt(password)) {
      return Promise.resolve(true)
    }
    return Promise.resolve(false)
  }

  async function saveUser (user) {
    let cond = {
      where: { username: user.username }
    }
    let existingUser = await UserModel.findOne(cond)
    if (!existingUser) {
      user.password = utils.encrypt(user.password)
      user.photo = ''
      let newUser = (await UserModel.create(user)).toJSON()
      return newUser
    }
    return Promise.reject(new Error('User already exists'))
  }

  return {
    findById,
    findByUsername,
    findByEmail,
    findByName,
    findConnected,
    findAll,
    authenticate,
    saveUser
  }
}
