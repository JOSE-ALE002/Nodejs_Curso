const argv = require('yargs').argv;
const _ = require('lodash');

if(argv.usuario === 'Alejandro'){
    let x = {'Nombre': 'Jose'};
    let y ={'edad': 19};
    let z =[
        {       
            Nombre: 'Jose',
            apellido: 'Ibañez',
            apodo: 'Chepillo',
            edad: 20
        },

        {
            Nombre: 'Pavel',
            apellido: 'Coreas',
            apodo: 'Pavon',
            edad: 21
        }
    ]

    let resultado = _.find(z, {Nombre :'Jose', apodo: 'Chepillo'});
    console.log(resultado);
}else{
    console.log('Usuario no valido');
    
}

