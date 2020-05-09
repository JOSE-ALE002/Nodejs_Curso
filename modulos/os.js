// Este modulo nos da informacion sobre nuestro equipo

const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log('free mem:', os.freemem() + ' bites');
console.log('total mem: ', os.totalmem() + ' bites');
console.log('hostname: ', os.hostname());


