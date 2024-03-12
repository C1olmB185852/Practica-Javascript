let palabraOculta = "javascript";
let intentos = 3;

function verificarSuposicion(suposicion, palabraOculta) {
    if(suposicion.toLowerCase() === palabraOculta.toLowerCase()) {
        return true;
    }
    return false;
}

function jugarAdivinaLaPalabra() {
    alert("Bienvenido a jugar Adivina la Palabra Oculta");
    alert("Tiene 3 intentos para adivinar la palabra");
    alert("-Pista- la palabra oculta es un lenguaje de programación");

    while (intentos > 0) {
        let suposicion = prompt("Adivina la Palabra");

        if(verificarSuposicion(suposicion, palabraOculta)) {
            alert("!Correcto! Has adivinado la palabra oculta");
            break;
        } else {
            intentos--;
            if(intentos > 0) {
                alert(`Incorrecto, Aun tienes ${intentos} intentos restantes`);
            } else {
                alert(`Intentos agotados, la palabra oculta era ${palabraOculta}`);
            }
        }
    } 
}

jugarAdivinaLaPalabra();


// toLowerCase() en JavaScript se utiliza para convertir una cadena de texto a minúsculas. Este método no altera la cadena original, sino que devuelve una nueva cadena con todos los caracteres convertidos a minúsculas.