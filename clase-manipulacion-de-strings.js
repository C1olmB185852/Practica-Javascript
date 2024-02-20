// String Primitivo

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = String('Soy un String primitivo tambien')
console.log(typeof stringPrimitivoTambien);

// String objeto

const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto);

// Acceder a caracteres

const saludo = 'Hola. ¿Como esta?'

console.log(saludo[2])
console.log(saludo.charAt(2));
console.log(saludo.indexOf('Como'));
console.log(saludo.indexOf('como'));