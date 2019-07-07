'use strict'

const society = {
  area: 'city',
  society_id: 1
}

const societies = [
  society,
  extend(society, { area: 'city', society_id: 2 }),
  extend(society, { area: 'state', society_id: 1 }),
  extend(society, { area: 'state', society_id: 2 }),
  extend(society, { area: 'state', society_id: 3 }),
  extend(society, { area: 'country', society_id: 1 }),
  extend(society, { area: 'country', society_id: 2 }),
  extend(society, { area: 'continent', society_id: 1 }),
  extend(society, { area: 'continent', society_id: 2 })
]
// Clona un objeto y reemplaza ciertos valores
function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: society,
  all: societies
}
