const express = require('express');
const socket = require('socket.io');
const http = require('http');
const {Server} = require('socket.io')
//App setup :D
const app = express();

const server = app.listen(3000 , ()=>{
   console.log("Here we go, we are connected in port 3000 !") ;
});

// Static files

app.use(express.static('public'));


// Socket setup
const io = new Server(server);


io.on('connection', (socket) => { // socket refer to socket instance and user

    console.log('made socket connection', socket.id);
    socket.on('chat', (data) => {
        console.log(data);
        io.sockets.emit('chat', data)
    });
    socket.on('typing', (data)=>{
       socket.broadcast.emit('typing' , data);
    });

});






