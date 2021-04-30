## Proyecto test web socket
### 
---

<br>
En este proyecto tenemos un script para correr el servidor, el mismo esta escuchando en el puerto 8080, utilizamos la libreria de sockets.io/expresss/nodejs. 
<br>
<br>

---
### La App
<br>
tenemos un video con un boton de play y pausa, buscamos via web socket que si se pausa en un cliente en los otros clientes tambien. se consiguio atravez de definir la variable play, que es un booleano, utilizamos el metodo de io.on y le damos la conexion y su respectivo function callback, pasandole un parametro(que definimos como constante) llamado socket que ahi aloja el metodod connect con su respectivo puerto (localhost:8000).
luego dentro del callback ejecutamos el metodo socket.emit le pasamos el video status y la variable play que es = a true.
luego utilizamos el metodo socket.on le pasamos el vide-status y ahora el callback tiene como parametro la data que trae el socket, luego definimos que play = data.play, y utilizo el broadcast.emit.

---

---
### MISCELLANEOUS   
---

Dejo comentado dentro del codigo tambien, ciertos procesos que me parecieron interesantes para poder dejar documentado.

carpeta ParsedToES5 que tiene parseado a es5 los js
todo con libreria babe(no utilice webpack, porque es una app bastante sencilla y con poco para parsera, pero lo deseable seria usar webpack)
se agregaron estilos basicos, con media queries si cambia el size del viewport cambia el color.

falto : subir a heroku por un tema de rutas


<br>

<br>
<br>


## Desarollado por:
<br>
<br>
### Thomas Wiersch
     
