const express = require('express');
const socket = require('socket.io');
const http = require('http');



//App setup :D
const app = express();

const server = app.listen(3000 , ()=>{
   console.log("Here we go we, are connected in port 3000 !") ;
});

// Static files

app.use(express.static('public'));

// Socket setup
const io = socket(server);


io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

    socket.on('chat', (data) => {
        console.log(data);
        io.sockets.emit('chat', data)
    });
    socket.on('typing', (data)=>{
       socket.broadcast.emit('typing' , data);
    });
});






