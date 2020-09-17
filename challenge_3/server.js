// build Express app
const express = require('express')
const app = express()
const port = 3000
const db = require('./database')

app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('mongodb://localhost:27017', (req, res) => {
  res.status(200).send('Hello from mongoDB');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

