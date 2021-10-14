const express = require('express');
app = express()
const path = require('path')
const port = 1337
const http = require('http');

//create the server
const server = http.createServer(app);



const frontEnd = path.resolve(__dirname, '..', 'client', 'dist')



app.use(express.static(frontEnd))

server.listen(port, ()=> {
  console.log(`listening on port ${port}`)
})

