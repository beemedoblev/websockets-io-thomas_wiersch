const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


/*------------middleware para determinar ruta estatica---------------------=-----*/

 app.use(express.static('public'));
 
/*------------ruta ---------------------=-----*/






/*---------------Scoket-------------------------------------------------------------*/
// aca inicializo la variable play en true, para que el video se reproduzca.
let play = null;
let time = 0;
io.on('connection', function(socket){
socket.emit('video-status', {
    play,
    time
})
socket.on('video-status',function(data) {
    play = data.play; 
    time = data.time;
    socket.broadcast.emit('video-status',{
        play,
        time 
    })
})
})




/*---------------Servidor Escuchando -----------*/

server.listen(8080, function(){
    console.log('Servidor corriendo en http://localhost:8080');
})