// Capacidades que tienen las funviones al igual que otros

// 1. Pasar funciones como argumentos -> callback
function a () {}
function b (a) {}
b(a)

// Retonar Funciones
function a () {
    function b () {}
    return b
}

// Asignar funviones a variiables -> Expresion de funcion
const a = function () {}

//  Tener propiedades y metodos
function a () {}
const obj = {}
a.call(obj)

// Anidar funciones -> Nedted functions
function a () {
    function b () {
        function c () {

        }
        c()
    }
    b()
}
a()

// Es posible almacenar funciones en objetos?
const rocket = {
    name: 'Falcon 10',
    launchMessage: function launchMessage () {
        console.log('🔥');
    }
}

rocket.launchMessage()