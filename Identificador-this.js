// Enlace implicito 

const house = {
    dogName: 'Thor',
    dogGreeting: function () {
        console.log(`Hola, Soy ${this.dogName}`);
    }
}

house.dogGreeting()

// Enlace Explicito

function dogGreeting () {
    console.log(`Hola, Soy ${this.dogName}`);
}

const newHouse = {
    dogName: 'Loki',
}

dogGreeting.call(newHouse)

function newDogGreeting (owner, address) {
    console.log(`Hola, Soy ${this.dogName} and I live with ${owner} on ${address}`);
}

const owner = 'David'
const address = 'Acacias 2025889'
newDogGreeting.call(newHouse, owner, address)