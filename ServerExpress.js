// Es un modulo que permite crear servidores es un Framework de NodeJs
const express = require('express');
const colors = require('colors')

const server = express();

server.get('/', (req, res) =>{
    res.send('<h1>Hola Mundo</h1>');
    res.end(); // Esto no es necesario con Express
})

server.listen(3000, () =>{
    console.log("Server on port 3000".yellow);
});
