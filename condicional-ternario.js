//let mensaje 

//const edad = 19;

//if(edad >= 18) {
    //mensaje = "Es mayor de edad"
//}else {
   // mensaje = "Es menor de edad"
//}

//console.log(mensaje);

const validacion = edad => {
    edad >= 18
    ? console.log("Eres mayor de edad, puedes pasar")
    : console.log("Eres menor de edad, no puedes pasar");
}
validacion(19)