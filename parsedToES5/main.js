'use strict';

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

/*------------middleware para determinar ruta estatica---------------------=-----*/

app.use(express.static('public'));
/*------------ruta ---------------------=-----*/

/*---------------Scoket-------------------------------------------------------------*/
// aca inicializo la variable play en true, para que el video se reproduzca.
var play = true;
io.on('connection', function (socket) {
    socket.emit('video-status', {
        play: play
    });
    socket.on('video-status', function (data) {
        play = data.play;
        socket.broadcast.emit('video-status', {
            play: play
        });
    });
});

/*---------------Servidor Escuchando -----------*/

server.listen(8080, function () {
    console.log('Servidor corriendo en http://localhost:8080');
});