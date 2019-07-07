'use strict'

const db = require('../')
const config = require('../config')

async function run () {
  const { Country } = await db(config.db).catch(handleFatalError)
  const users = await Country.getNameByContinent('Americas').catch(handleFatalError)
  console.log('----LISTA DE PAISES----')
  console.log(users)

  // const { Continent } = await db(config.db).catch(handleFatalError)
  // const u = await Continent.getContinents().catch(handleFatalError)
  // console.log('-----CONTINENTES-----')
  // console.log(u)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
