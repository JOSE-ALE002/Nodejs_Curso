const _ = require('lodash');

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

//LODASH NOS PERMITE CONCATENAR DOS OBJETOS EN UN UNICO JSON
// let resultado = _.assign(x, y);
// console.log(resultado);

//LODASH ME PERMITE REPERTIR UNA FUNCION "n" VESES
// _.times(3, ()=>{
//     console.log('Hola Mundo')
// });

//LODASH ME PERMITE BUSCAR UN OBJETO ATRAVEZ DE UNA COLLECION DE OBJETOS
let resultado = _.find(z, {Nombre :'Jose', apodo: 'Chepillo'});
console.log(resultado);





