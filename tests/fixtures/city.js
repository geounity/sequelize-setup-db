'use strict'

const city = {
  name: 'La Plata',
  state_id: 1
}

const cities = [
  city,
  extend(city, { name: 'Brandsen', state_id: 1 })
]
// Clona un objeto y reemplaza ciertos valores
function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: city,
  all: cities
}
