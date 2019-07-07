'use strict'

const country = {
  name: 'Argentina',
  alpha2Code: 'AR',
  data: {}
}

const countries = [
  country,
  extend(country, { name: 'Uruguay', alpha2Code: 'UY', data: {} })
]
// Clona un objeto y reemplaza ciertos valores
function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: country,
  all: countries
}
