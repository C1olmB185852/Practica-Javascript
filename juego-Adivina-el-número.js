const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt(prompt("Adivina el nummero secreto entre el 1 al 10"))

console.log(`Este es el numero con el que juega ${numeroJugador}`);

if(numeroJugador === numeroSecreto) {
    console.log("!Felicidades adivino el numero secreto");
}else if (numeroJugador < numeroSecreto) {
    console.log("El numero es demasiado bajo, intenta denuevo");
}else {
    console.log("El numero es muy alto, intenta denuevo");
}