// push()

const paises = ['Colombia', 'Venezuela', 'Peru']
const nuevosPaises = paises.push('Ecuador', 'Chile')

console.log(paises);
console.log(nuevosPaises);

// pop()

const quitarPais = paises.pop()

console.log(paises);
console.log(quitarPais);

// Mas ejemplos 

// El método push() se utiliza para agregar uno o más elementos al final de un array. 
//Modifica el array original y devuelve la nueva longitud del array.

let frutas = ["manzana", "banana", "cereza"];

// Agregar un nuevo elemento al final
frutas.push("naranja");

console.log(frutas);  // Resultado: ["manzana", "banana", "cereza", "naranja"]


// El método pop() se utiliza para eliminar el último elemento de un array. 
//Modifica el array original y devuelve el elemento eliminado.

let frutass = ["manzana", "banano", "cereza"];

// Eliminar el último elemento
let ultimaFrutas = frutass.pop();

console.log(frutass);       // Resultado: ["manzana", "banana"]
console.log(ultimaFrutas);  // Resultado: "cereza"