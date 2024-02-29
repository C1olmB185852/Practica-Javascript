const greeting = function (name) {
    return `Hola, ${name}`
}

// Arrow funcion - explicito retorno

const newGreeting = (name) => {
    return `Hola, ${name}`
}

// Arrow funcion - inplicito rentorno

const newGreetingImplicit = name => `Hola, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hola, ${name} ${lastName}`


// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWitArrowFunction:  (message) => {
        console.log(`${this.name} says: ${message}`);
    }
}

finctionalCharacter.messageWithTraditionalFunction('With reat power comer great responsability')

finctionalCharacter.messageWitArrowFunction('Spider-Man')