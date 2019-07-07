'use strict'

const db = require('./')
const config = require('./config')

const inquirer = require('inquirer') // Hace preguntas al usuario, por ejemplo si esta seguro de borrar una base de datos
const chalk = require('chalk') // Agrega estilos a la salida en terminal
const minimist = require('minimist')

const args = minimist(process.argv)
const prompt = inquirer.createPromptModule()

async function setup () {
  if (!args.yes) {
    if (!config.db.setup) {
      return console.log('Setup is false in config')
    }
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

  await db(config.db)
    .then(() => {
      console.log(
        chalk.cyan('-----------------------------------------------------')
      )
      console.log(chalk.cyan('        SE CREARON TODAS LAS TABLAS'))
      console.log(
        chalk.cyan('-----------------------------------------------------')
      )
      console.log(chalk.cyan('[Success!]'))

      // Carga de fixtures
      // const countries = require('./fixtures/countries')
      // for (let c of countries) {
      //   await connDb.Country.saveCountry(c).catch(e => console.log(e))
      //   await connDb.Continent.saveContinent(c.region).catch(e => console.log(e))
      // }

      // Create test data base
      // if (true) {
      //   const connDb_Test = await db(config.db_test).catch(handleFatalError)
      //   for (let d of countries) {
      //     await connDb_Test.Country.saveCountry(d).catch(e => console.log(e))
      //     await connDb_Test.Continent.saveContinent(d.region).catch(e => console.log(e))
      //   }
      // }

      process.exit(0)
    })
    .catch(handleFatalError)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1) // Mata el proceso
}

setup()
