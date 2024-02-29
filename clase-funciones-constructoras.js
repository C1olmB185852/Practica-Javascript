const personalizedMessage = () => 'Good'

function Rocket (name, ownMessage) {
    this.name = name
    this.launchMessage= () => ownMessage
}

const falcon9Rocket = new Rocket('Falcon 9', 'Good')
const falcon9Heavy = new Rocket('Falcon Heavy')
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())