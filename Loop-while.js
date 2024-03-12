/*

while(condicion) {
    codigo
}

Lo usamos para poder meter instrucciones en un ciclo y se vaya 
repitiendo siempre y cuando se cumpla la condición que tenemos en él. 
Es importante comprenderlo y saber utilizarlo, de no hacerlo bien podemos 
generar bucles infinitos que harán colapsar al navegador.


*/

let contador = 0;

while (contador < 10) {
    console.log(contador);
    contador++;
}
