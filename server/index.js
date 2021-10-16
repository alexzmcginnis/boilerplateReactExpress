const express = require('express');
app = express()
const path = require('path')
const port = 1337
const http = require('http');
const frontEnd = path.resolve(__dirname, '..', 'client', 'dist')

//create the server
const server = http.createServer(app);








app.use(express.static(frontEnd))

server.listen(port, ()=> {
  console.log(`listening on port ${port}`)
})

