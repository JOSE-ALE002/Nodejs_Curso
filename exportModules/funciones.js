module.exports = {
    saludar: () =>{
        console.log("Hola Mundo");
    },

    info: (nombre, edad) =>{
        console.log("Bienvenido " + nombre);
        console.log("Mi nombre es: " + nombre + ' y tengo una edad de:' + edad );
    },

    sumar: (a, b) =>{
        return a+b;
    }, 

    restar: (a, b) => a - b,

    mostrar: (name) => console.log(name),

    elevacion: (num) => num*num
}