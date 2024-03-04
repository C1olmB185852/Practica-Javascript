//switch(expresion) {
   // case valor1:
 //       break;
  //  case valor2:
 //       break;    
 //   case valor1:
   //     break;
//    case valor2:
 //       break;
//    default:  
//}

let expr = "Naranjas"

switch(expr) {
    case "Naranjas":
        console.log("Las Naranjas cuentas $2.500 el kilo");
        break;
    case "Mangos":
            console.log("Los Mangos cuentas $1.000");
            break;
    case "Mandarina":
                console.log("Las Mandarinas cuentas $2.500 el kilo");
            break;
    default:
        console.log(`lo siento, no contamos con ${expr}`);
}

console.log("Hay algo mas que desees?");