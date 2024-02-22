const caricatura = { nombre: 'Vaca y Pollo'}

function recuerdo(personaje) {
    console.log(`${this.nombre} era mi caricatura favorita. Me encantaba ver las aventuras de ${personaje}`);
}

recuerdo.call(caricatura, 'Vaca')
recuerdo.bind(caricatura, 'Pollo')

// Resultado Vaca y Pollo era mi caricatura favorita. 
// Me encantaba ver las aventuras de Vaca