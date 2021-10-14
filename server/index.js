const express = require('express');
app = express()
const path = require('path')
const port = 1337
const http = require('http');
const server = http.createServer(app);

//for sockets
const { Server } = require('socket.io');
const io = new Server(server); //socket instance

const frontEnd = path.resolve(__dirname, '..', 'client', 'dist')

io.on('connection', (socket) => { //listens for connectin
  console.log(`user ${socket.id} connected`)
  socket.on('message', (data) => {
    socket.broadcast.emit('receivedMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(express.static(frontEnd))

server.listen(port, ()=> {
  console.log(`listening on port ${port}`)
})

