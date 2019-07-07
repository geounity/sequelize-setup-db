'use strict'

const test = require('ava')

const utils = require('../lib/utils')

let db = null

// Db tests
const setupDatabase = require('../')
const config = require('../config')
test.before('Setup database', async t => {
  db = await setupDatabase(config.db_test)
  t.truthy(db, 'Service should exist') // Significa que devuelve un valor
})

// Continent
test('Continent model exist', t => {
  t.truthy(db.Continent, 'Continent service should exist') // Significa que devuelve un valor
})
test.serial('Get continents', async t => {
  let result = await db.Continent.getContinents()
  t.is(result.length, 6, 'Deberian haber 6 continentes')
})

// Country
test('Country model exist', t => {
  t.truthy(db.Country, 'Country service should exist') // Significa que devuelve un valor
})
test.serial('Get countries', async t => {
  let result = await db.Country.getCountries()
  t.is(result.length, 250, 'Deberian haber 250 paises')
})

// // States
// test('State model exist', t => {
//   t.truthy(db.State, 'State service should exist') // Significa que devuelve un valor
// })
// test.serial('Save state', async t => {
//   let created = await db.State.saveState(state.name, state.country_id)
//   t.is(state.name, created.name)
//   for (let s of states) {
//     await db.State.saveState(s.name, s.country_id).catch(e => console.log(e))
//   }
// })

// // City
// test('City model exist', t => {
//   t.truthy(db.City, 'City service should exist') // Significa que devuelve un valor
// })
// test.serial('Save city', async t => {
//   let created = await db.City.saveCity(city.name, city.state_id)
//   t.is(city.name, created.name)
//   for (let c of cities) {
//     await db.City.saveCity(c.name, c.state_id).catch(e => console.log(e))
//   }
// })

// Users
test('User model exist', t => {
  t.truthy(db.User, 'User service should exist') // Significa que devuelve un valor
})
const user = {
  username: 'seba', // random nombre y todo lo demas
  email: 'sebastiancardoso92@gmail.com',
  password: 'foo123',
  name: 'Sebastian',
  datebirth: new Date(),
  photo: 'img.jpg',
  connected: true,
  oauthID: null,
  society_id: 1
}
// test.serial('save user - new', async t => {
//   let created = await db.User.saveUser(user)
//   t.is(user.username, created.username)
// })
test.serial('save user - exists', async t => {
  let created = db.User.saveUser(user)
  let error = await t.throws(created)
  t.is(error.message, 'User already exists')
})
test.serial('User#findById', async t => {
  let result = await db.User.findById(1)
  t.is(result.username, user.username)
})
test.serial('User#findByUsername', async t => {
  let result = await db.User.findByUsername(user.username)
  t.deepEqual(user.username, result.username)
})
test.serial('User#findByEmail', async t => {
  let result = await db.User.findByEmail(user.email)
  t.is(result.username, user.username)
})
test('encrypt password', t => {
  let password = 'foo123'
  let encrypted = '02b353bf5358995bc7d193ed1ce9c2eaec2b694b21d2f96232c9d6a0832121d1'
  let result = utils.encrypt(password)
  t.is(result, encrypted)
})

test('authenticate user SUCCESS', async t => {
  let success = await db.User.authenticate(user.username, 'foo123')
  t.true(success)
})
test('authenticate user FAIL', async t => {
  let fail = await db.User.authenticate(user.username, 'foo')
  t.false(fail)
})

// Debates
test('Debate model exist', t => {
  t.truthy(db.Debate, 'Debate service should exist')
})

// test.serial('Save debate - new', async t => {
//   let created = await db.Debate.saveDebate(debate, 1)
//   t.is(debate.title, created.title)
// })

// test.serial('Save debate - title exists', async t => {
//   let created = db.Debate.saveDebate(debate, 1)
//   let error = await t.throws(created)
//   t.is(error.message, 'Title debate exists yet')
// })

// test.serial('Save debate - user not exists', async t => {
//   let created = db.Debate.saveDebate(debate, 999)
//   let error = await t.throws(created)
//   t.is(error.message, 'User not exists')
// })
