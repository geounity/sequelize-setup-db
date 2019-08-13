async function run () {
  const { Client } = require('pg')
  // clients will also use environment variables
  const client = new Client()
  await client.connect()
  const res = await client.query('SELECT * FROM countries')
  console.log('RESPUESTA')
  console.log(res)
  await client.end()
}

run()
