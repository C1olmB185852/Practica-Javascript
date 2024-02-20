// Social Media Profile

// 1. User Information
const username = 'Daniel2k5'
const fullName = 'Daniel Esteban Martinez Herrera'
const age = 19 
const isStudent = true

// 2. Address
const address = {
    street: '123 Brasilia',
    city: 'Armenia',
    state: 'Quindio',
    zipCode: 630001
}

// 3. Hobbies
const hobbies = ['Jugar', 'Estudiar Programacion']

// 4. Generating personalized bio
const personalizedBio =`Hola soy ${fullName}.
tengo ${age} años.
Vivo en ${address.city} , ${address.state}.
Estos son mis pasatiempos ${hobbies.join(', ')}.
Gracias por leer!`

// 5. Print tge user profile and bio
console.log(personalizedBio);