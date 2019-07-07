'use strict'

const continent = {
  name: 'America del Sur'
}

const continents = [
  continent,
  extend(continent, { name: 'America Central' }),
  extend(continent, { name: 'America del Norte' }),
  extend(continent, { name: 'Africa' }),
  extend(continent, { name: 'Asia' }),
  extend(continent, { name: 'Europa' }),
  extend(continent, { name: 'Oceanía' })
]
// Clona un objeto y reemplaza ciertos valores
function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: continent,
  all: continents
}
