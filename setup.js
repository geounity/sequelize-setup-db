'use strict'

const fs = require('fs')

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
  let conn = {}
  if (args.dev) {
    try {
      conn = await db(config.dev)
      console.log(chalk.cyan('----------------------------------------------------------------------'))
      console.log(chalk.cyan('[DEVELOPMENT]'))
      console.log(chalk.green('[Success!]'))
    } catch (e) {
      handleFatalError(e)
    }
  } else {
    try {
      conn = await db(config.production)
      console.log(chalk.cyan('----------------------------------------------------------------------'))
      console.log(chalk.cyan('[PRODUCTION]'))
      console.log(chalk.green('[Success!]'))
    } catch (e) {
      handleFatalError(e)
    }
  }

  // SQL Files
  const countriesSQL = fs.readFileSync('./fixtures/Countries.sql').toString()
  const statesSQL = fs.readFileSync('./fixtures/States.sql').toString()

  // Node-Postgres conection
  // clients use environment variables
  const { Client } = require('pg')
  const client = new Client()
  await client.connect()
  await client.query(countriesSQL, (err) => err ? handleFatalError(err) : '')
  await client.query(statesSQL, (err) => err ? handleFatalError(err) : '')
  console.log('POR SUPUESTA HASTA ACA LLEGAMOS')

  // JSON files of http://restcountries.es
  const continents = require('./fixtures/continents')
  const countries = require('./fixtures/countries')

  // Create first community global
  // Every one geopolitic is in other inside. Except global. Here inside inself
  const { Geopolitic, Country, State } = await conn
  await Geopolitic.create({
    name: 'Global',
    level: 1,
    division_name: 'continents'
  })

  // Create second community - Continents
  const uuid = await Geopolitic.getUuidByNameAndLevel('Global', 1)
  for (const c of continents) {
    await Geopolitic.create({
      name: c.name,
      level: 2,
      division_name: 'countries',
      in_uuid: uuid
    })
  }

  // Create third community countries and save country table
  for (const c of countries) {
    const uuid = await Geopolitic.getUuidByNameAndLevel(c.region, 2)
    let divisionName
    switch (c.alpha2Code) {
      case 'UY':
        divisionName = 'Departamentos'
        break
      case 'AR':
        divisionName = 'Provincias'
        break
      default:
        divisionName = 'Estados'
    }
    const created = await Geopolitic.create({
      name: c.name,
      level: 3,
      population: c.population,
      division_name: divisionName,
      in_uuid: uuid
    })
    const subsql = `SELECT COUNT(*) FROM states WHERE country_id = (SELECT id FROM countries WHERE code = '${c.alpha2Code}')`
    const sql = `
      UPDATE countries
      SET flag='${c.flag}',
          population=${c.population},
          in_continent='${c.region}',
          subregion='${c.subregion}',
          division_name='${divisionName}',
          cant_states=(${subsql}),
          geopolitic_uuid='${created.dataValues.uuid}'
      WHERE code='${c.alpha2Code}'`
    await client.query(sql)
    console.log('Country: ', c.name)
  }

  // Create ford community states and save state table
  const states = await State.getAllStates()
  for (const s of states) {
    const { country } = await Country.getNameById(s.countryId)
    const uuid = await Geopolitic.getUuidByNameAndLevel(country, 3)
    const created = await Geopolitic.create({
      name: s.state,
      level: 4,
      in_uuid: uuid
    })
    const sql = `UPDATE states SET geopolitic_uuid='${created.dataValues.uuid}' WHERE id='${s.id}'`
    await client.query(sql)
    console.log('States: ', s.state, ' id: ', s.id)
  }
  await client.end()
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1) // Mata el proceso
}

setup()
