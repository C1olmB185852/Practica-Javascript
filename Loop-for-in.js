// El bucle for...in es una  construcción de bucle 
//que se utiliza para iterar sobre las propiedades enumerables 
//de un objeto en JavaScript. Proporciona una forma de acceder 
//y modificar potencialmente los pares clave-valor dentro de un objeto.

//Ejemplo 1

const listaCompras = {
    leche: 2,
    huevos: 8,
    arroz: 2,
    pilasAAA: 2
}

for (variedad in listaCompras) {
    console.log(variedad);
}

for (variedad in listaCompras) {
    console.log(`${variedad} : ${listaCompras[variedad]}`);
}

// Ejemplo 2

console.log("////////////////////////////////////////////////////////");

const persona = {
    nombre: "Daniel",
    edad: 19,
    ciudad: "Armenia"
  };
  
  for (const propiedad in persona) {
    console.log(propiedad, persona[propiedad]); 
  }
  