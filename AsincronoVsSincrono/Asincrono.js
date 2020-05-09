// Asincrono: Permite ejecutar diferentes operaciones en un espacio de tiempo
const fs = require('fs');

console.log('iniciliazado');

fs.readFile('./asincrono.txt', 'utf-8', (err, data) =>{
        if(err){
            console.log(`Ha ocurrido un error de: ${err}`);
        }
        console.log(data);
});

fs.appendFile('asincrono.txt', ' Bueno y Maravilloso', (err) =>{
    if(err) console.log(`Error ${err}`);
    ;
    console.log('Se ha modificado el archivo');
});

fs.rename("asincrono.txt", "archivo.txt", (err) =>{
    if(err) throw err;
    console.log('Renombrado');
    
});

fs.unlink('archivo.txt', (err) =>{
    if(err) console.log(`Error: ${err}`);
});

console.log('Finalizado');
