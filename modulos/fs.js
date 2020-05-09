// Este modulo nos permite trabajar con nuestros archivos del sistema
const fs = require('fs');

//La funcion sirve para ver si ha ocurrido un error
fs.writeFile('./texto.txt', 'Linea Uno', function(err){
    if(err){
        console.log(err);
    }

    console.log('Archivo Creado');
});


//Sirve para leer una archivo
fs.readFile('./texto.txt', function (err, data) {
    if(err){
        console.log(err);
    }
    
    console.log(data.toString());
})


// NodeJs ejecutara primero esta linea aunque sea la ultima
// esto por que nodeJs solo da instrucciones y espera a que 
// esta se hagan, pero mientras se hacen esas tareas NodeJs
// ejecutara el esto de codigo que sigue mientras de realiza 
// esta tarea y de esa forma se van hacendo las tareas, tareas que termine primero
// tarea que hace nodeJs primero.

console.log("Ultima linea de codigo");
