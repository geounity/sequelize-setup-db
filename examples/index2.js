'use strict'

const db = require('..')
const config = require('../config')

async function run () {
  const { User } = await db(config.db).catch(handleFatalError)

  const user = await User.create({
    username: 'aaaaaa',
    email: 'aaaaaao@gmail.com',
    password: 'password de testeo',
    name: 'testname',
    datebirth: new Date(),
    photo: null,
    connected: true,
    oauthID: null
  }).catch(handleFatalError)

  console.log('----CREACION DE USUARIOS----')
  console.log('--USER--')
  console.log(user)

  const users = await User.findAll().catch(handleFatalError)
  console.log('----LISTADO DE USUARIOS----')
  console.log('--USERS--')
  console.log(users)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
