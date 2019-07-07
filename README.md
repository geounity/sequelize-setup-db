# geounity-db

Para crear la base de datos
npm run setup

Para crear la base de datos de pruebas para hacer los tests
npm run setup -- --test

Las encuestas, las preguntas de las encuestas y los resultados de las encuestas usan JSONB.
Las encuestas pueden tener muchas preguntas y una pregunta puede estar en varias encuestas.
Los resultados de las encuestas se guardan en un registro aparte.

##Usage

``` js
const setupDataBase = require('geounity-db')

setupDatabase(config).then(db => {
  const {
    Answer, Argument, City, Community_fund, Community,
    Continent, Country, Debate, Denuncias_answer, Denuncias_argument,
    Denuncias_opinion, Donation, Offer, Opionion, Points_of_view,
    Proposal, Question_survey, Question, Resource, Result,
    Society, State, Static, Subquestion, Survey, User
  } = db
}).catch(err => console.error(err))
```
