const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


/*------------middleware para determinar ruta estatica---------------------=-----*/

 app.use(express.static('public'));
/*------------ruta ---------------------=-----*/






/*---------------Scoket-------------------------------------------------------------*/
// aca inicializo la variable play en true, para que el video se reproduzca.
let play = true;
io.on('connection', function(socket){
socket.emit('video-status', {
    play
})
socket.on('video-status',function(data) {
    play = data.play;
    socket.broadcast.emit('video-status',{
        play 
    })
})
})




/*---------------Servidor Escuchando -----------*/

server.listen(8080, function(){
    console.log('Servidor corriendo en http://localhost:8080');
})