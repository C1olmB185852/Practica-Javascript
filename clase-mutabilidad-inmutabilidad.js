// tipo de dato primitivo 

let numero = 23;
numero = numero + 10;
console.log(numero)

// tipo de dato complejo

let usuario = { nombre: 'Pepe', edad:15 }
usuario.edad = 20;
console.log(usuario);

let consolas = ['Playstation 5', 'Playstation 2']
consolas[1] = 'Nintendo 3Ds'
console.log(consolas);

function cambiarNombre (objeto) {
    objeto.nombre = 'Daniel'
}

let persona = { nombre: 'David' }
cambiarNombre(persona)

console.log(persona)