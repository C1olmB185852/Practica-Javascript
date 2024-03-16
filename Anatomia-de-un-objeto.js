const persona = {
    nombre: "Daniel",
    edad:  30,
    direccion: {
        barrio: "Acacias",
        ciudad: "Armenia",
    },
    saludar() {
        console.log(`Hola mi nombre es ${persona.nombre}`);
    }
}

console.log(persona);

console.log(persona.nombre);
console.log(persona.saludar());

persona.ciudad = "la brasilisa";

console.log(persona.ciudad);