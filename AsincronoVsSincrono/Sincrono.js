// Asincrono: Permite ejecutar diferentes operaciones en un orden secuencial es decir en cascada
const fs = require('fs');

console.log('inicilizado');

var texto = fs.readFileSync('./sincrono.txt', 'utf-8');
console.log(texto);

fs.renameSync('sincrono.txt', 'hola.txt');
console.log('Renombrado');

fs.appendFileSync('./hola.txt', ` Hermoso`);
console.log(`Modificado`);

fs.unlinkSync('hola.txt');
console.log('Eliminado');


console.log('Finalizado');
