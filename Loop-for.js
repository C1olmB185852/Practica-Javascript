//for (variable; condicion; incremento) {

//}

let list = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

for(let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

//Paso 1: Esta la variable declarada e inicializada( let = 0 )
//Paso 2: Se valida la condición ( i < list.length ) , si la condición se cumple continua el paso 3, de lo contrario se termina el ciclo.
//Paso 3: Entra al cuerpo del ciclo y ejecuta la lógica&#x20;
//{ console.log(list\[i]); }
//Paso 4: Aumenta en uno el valor de la variable ( i++ )
//Paso 5: Comienza con el Paso 1 pero con el valor aumentado ( let = 1 )&#x20;