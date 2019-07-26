'use strict'

const db = require('./')
const config = require('./config')

const inquirer = require('inquirer') // Hace preguntas al usuario, por ejemplo si esta seguro de borrar una base de datos
const chalk = require('chalk') // Agrega estilos a la salida en terminal
const minimist = require('minimist')

const args = minimist(process.argv)
const prompt = inquirer.createPromptModule()

async function setup () {
  if (!args.yes) { // Ex: npm run setup -- --yes
    const answer = await prompt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'This will destroy your database, are you sure?'
      }
    ])
    if (!answer.setup) {
      return console.log('Nothing happened!')
    }
  }

  // npm run setup -- --dev (development mode)
  if (args.dev) {
    await db(config.dev)
      .then(() => {
        console.log(chalk.cyan('----------------------------------------------------------------------'))
        console.log(chalk.green('[Success!]'))
      })
      .catch(handleFatalError)
  } else {
    await db(config.production)
      .then(() => {
        console.log(chalk.cyan('----------------------------------------------------------------------'))
        console.log(chalk.green('[Success!]'))
      })
      .catch(handleFatalError)
  }

  const continents = require('./fixtures/continents')
  const countries = require('./fixtures/countries')

  // Create first community global
  // Every one geocommunity is in other inside. Except global. Here inside inself
  const { Geocommunity } = await db(config.dev).catch(handleFatalError)
  await Geocommunity.create({
    name: 'Global',
    level: 1,
    division_name: 'continents'
  })

  // Create second community - Continents
  let uuid = await Geocommunity.getUuidByNameAndLevel('Global', 1)
  for (let c of continents) {
    await Geocommunity.create({
      name: c.name,
      level: 2,
      division_name: 'countries',
      in_uuid: uuid
    })
  }

  // Create third community countries and save country table
  for (let c of countries) {
    let uuid = await Geocommunity.getUuidByNameAndLevel(c.region, 2)
    let divisionName = 'Provincias'
    switch (c.alpha2Code) {
      case 'UY':
        divisionName = 'Departamentos'
        break
      case 'US':
        divisionName = 'Estados'
    }
    await Geocommunity.create({
      name: c.name,
      level: 3,
      population: c.population,
      division_name: divisionName,
      in_uuid: uuid
    })
    // await Country.create({
    //   name: c.name,
    //   code: c.alpha2Code,
    //   flag: c.flag,
    //   population: c.population,
    //   division_name: divisionName,
    //   in_continent: c.region,'use strict'

  }
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1) // Mata el proceso
}

setup()
