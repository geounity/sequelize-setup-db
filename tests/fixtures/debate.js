'use strict'

const debate = {
  type: 'regional', // 'regional', 'ideologico', 'ambos'
  public: true,
  title: 'Educacion, probreza y salud en el mundo',
  images: ['path_uno', 'path_dos'],
  votes_up: 0,
  votes_down: 0
}

const debates = [
  debate,
  extend(debate, { type: 'regional', public: true, title: 'Derechos por los animales', images: ['path_uno', 'path_dos', 'path_tres'], votes_up: 0, votes_down: 0 }),
  extend(debate, { type: 'regional', public: false, title: 'Sanidad', images: ['path_uno', 'path_dos', 'path_tres'], votes_up: 0, votes_down: 0 }),
  extend(debate, { type: 'ideologico', public: true, title: 'Economia', images: ['path_uno', 'path_dos', 'path_tres'], votes_up: 0, votes_down: 0 }),
  extend(debate, { type: 'ideologico', public: false, title: 'Univesidades', images: ['path_uno'], votes_up: 0, votes_down: 0 }),
  extend(debate, { type: 'ambos', public: true, title: 'Tecnologia y Software', images: ['path_uno', 'path_dos', 'path_tres'], votes_up: 0, votes_down: 0 }),
  extend(debate, { type: 'ambos', public: false, title: 'Artistas', images: [], votes_up: 0, votes_down: 0 }),
  extend(debate, { type: 'ambos', public: true, title: 'Politicos corruptos', images: ['path_uno', 'path_dos', 'path_tres'], votes_up: 0, votes_down: 0 })
]
// Clona un objeto y reemplaza ciertos valores
function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: debate,
  all: debates,
  public: debates.filter(d => d.public), // funcion de arreglo de javascript
  findById: id => debates.filter(d => d.id === id).shift(),
  findByTitle: title => debates.filter(d => d.title === title).shift()
}
