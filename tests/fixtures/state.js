'use strict'

const state = {
  name: 'Buenos Aires',
  country_id: 1
}

const states = [
  state,
  extend(state, { name: 'Santa Cruz', country_id: 1 }),
  extend(state, { name: 'Montevideo', country_id: 2 })
]
// Clona un objeto y reemplaza ciertos valores
function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: state,
  all: states
}
