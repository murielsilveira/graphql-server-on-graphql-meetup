const express = require('express')
const app = express()

app.get('/', (resquest, response) => {
  response.send('was the pizza good?')
})

app.listen(4002, () => {
  console.log('Server running on http://localhost:4002')
})