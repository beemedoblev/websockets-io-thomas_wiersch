//defino socket como una constante
const socket = io.connect('http://localhost:8080', { 'forceNew' :true });

//defino constantes y guardo la data para utilizarla

const video = document.querySelector('#video');
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
socket.on('video-status', function(data){
console.log(data)

//play viene en true , es decir que cuando sea true el video va a correr


if (data.play){
    video.play();
}else{
    //false, se pausa
    video.pause();
}
})

//agrego evento cuando clickeo el boton
//evento para play
play.addEventListener('click', function(){
    video.play();
    
    socket.emit('video-status', {
    play : true
    })
})
//evento para pause
pause.addEventListener('click', function(){
    video.pause();
    socket.emit('video-status', {
        play : false
    })
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