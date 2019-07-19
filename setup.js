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
  const { Geocommunity, Country } = await db(config.dev).catch(handleFatalError)
  await Geocommunity.create({
    name: 'Global',
    level: 1,
    geocommunity_id: 1
  })

  // Create second community continents
  let id = await Geocommunity.getIdByName('Global', 1)
  for (let c of continents) {
    await Geocommunity.create({
      name: c.name,
      level: 2,
      geocommunity_id: id
    })
  }

  // Create third community countries and save country table
  for (let c of countries) {
    let id = await Geocommunity.getIdByName(c.region, 2)
    await Geocommunity.create({
      name: c.name,
      level: 3,
      geocommunity_id: id
    })
    await Country.create({
      name: c.name,
      code: c.alpha2Code,
      flag: c.flag,
      in_continent: c.region,
      subregion: c.subregion
    })
  }
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1) // Mata el proceso
}

setup()
