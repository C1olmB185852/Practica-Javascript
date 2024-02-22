const owner = 'Luis'
const address = '123 acacias'

function dogGreeting (owner, address) {
    console.log(`Hola, Soy ${this.dogName} and I live with ${owner} on ${address}`);
}

const newHouse = {
    dogName: 'Coco'
}

dogGreeting.call(newHouse, owner, address) 

const necessaryValues = [owner. address]
dogGreeting.apply(newHouse, necessaryValues)

const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
bindingWithBind()

