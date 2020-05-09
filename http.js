// Este modulo nos permite crear un servidor we
const http = require('http');

//www.npmjs.com--->Para descargar modulos de otras personas
const colors = require('colors');

const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("<h1>Hola Mundo Hermoso</h1>")
    res.end();
};

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.yellow);
    
});