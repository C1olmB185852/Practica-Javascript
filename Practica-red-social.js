const userDatabase = [
    {
        username: "andres",
        password: "1234",
    },
    {
        username: "david",
        password: "2005",
    },
    {
        username: "juan",
        password: "96358",
    },
];

const userTimeline = [
    {
        username: "jose",
        timeline: "Yo hoy no quiero trabajar",
    },
    {
        username: "Estefany",
        timeline: "Me encanta javascript",
    },
    {
        username: "Andres",
        timeline: "A mi me gusta mas el cafe que el te",
    },
]

const username = prompt("Cual es tu usuario?");
const password = prompt("Cual es tu contraseña?");

function usuarioExistente(username, password) {
    for(let i = 0; i < userDatabase.length; i++) {
        if(
            userDatabase[i].username === username &&
            userDatabase[i].password === password     
        ) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if(usuarioExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(userTimeline);
    } else {
        alert("Error, Usuario o Contraseña no valido")
    }
}

signIn(username, password);