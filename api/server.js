const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(cors())

const port = process.env.PORT || 3000

server.get('/', (req, res) => {
  res.send('Server is up and running!')
})

module.exports = server
