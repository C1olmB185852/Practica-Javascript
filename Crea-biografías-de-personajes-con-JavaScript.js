// Create Marvel

function Marvel (name, edad, superpower) {
    this.name = name 
    this.edad = edad
    this.superpower = superpower
    this.isLeader = false


    this.displayInfo = function () {
        console.log(`Marvel Information
        Name: ${this.name}
        edad: ${this.edad}
        SuperPower: ${this.superpower}
        ${this.isLeader ? 'Lider: Si' : 'Lider: No' }
        `);
    }

    this.becomeLeader = function () {
        this.isLeader = true
        console.log(`${this.name} Es el lider de los Vengadores !`);
    }
}

const vengador1 = new Marvel('Thor', '135', 'Fuerza sobrehumana, resistencia, durabilidad, velocidad, agilidad, reflejos, curación, longevidad y sentidos. Manipulación del clima y la materia. Manipulación de energía.');

const vengador2 = new Marvel('Hulk', '35', 'Fuerza sobrehumana, resistencia, durabilidad, curación, longevidad');

const vengador3 = new Marvel('Iron-Man', '33', 'Superfuerza, durabilidad y resistencia por armadura. Vuelo supersónico. Repulsores de energía y misiles de proyección. Regenerativo soporte vital');


vengador3.becomeLeader()

vengador1.displayInfo()
vengador2.displayInfo()
vengador3.displayInfo()