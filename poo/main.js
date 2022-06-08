import Vehiculo from "./vehiculo.js";
import Persona from "./persona.js";


function invocar(){

    let kilometros = 50000
    let marca = 'ford'

    
//CREAR LA INSTANCIA DE LA CLASE VEHICULO.
const vehiculo = new Vehiculo(kilometros,marca)
vehiculo.mostrar_km()


//creamos la instancia de la clase persona
const persona = new Persona
persona.apellido ='Perez'
persona.nombre = 'Juan'
persona.mostrar_datos_personales




}

document.getElementById('boton').addEventListener("click", invocar)