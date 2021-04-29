//defino socket como una constante
const socket = io.connect('http://localhost:8080', { 'forceNew' :true });

//defino constantes y guardo la data para utilizarla

const video = document.querySelector('#video');
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
socket.on('video-status', function(data){
console.log(data)

//play viene en true , es decir que cuando sea true el video va a correr

video.currentTime = data.time;

if (data.play){
    video.play();
}else{
    //false, se pausa
    video.pause();
}
})

//agrego evento cuando clickeo el boton
//evento para play
function emitStatus(play){
    socket.emit('video-status', {
        play,
        time: video.currentTime
        
        })
        
}

play.addEventListener('click', function(){
    video.play();
    emitStatus(true);
})
//evento para pause
pause.addEventListener('click', function(){
    video.pause();
    emitStatus(false);
    console.log("esto es el video:-->>",video)
})

adelante.addEventListener('click', function(){
    video.currentTime += 5;
    emitStatus(true);
})
atras.addEventListener('click', function(){
    video.currentTime -= 5
    emitStatus(true);
})

//Agrego evento para poder esconder y hacer aparecer el boton de play
video.addEventListener('play',function(){
 play.style.display='none';
 pause.style.display='block';
})


//Agrego evento para poder esconder y hacer aparecer el boton de pause
video.addEventListener('pause',function(){
 play.style.display='block'  
 pause.style.display='none' 
})