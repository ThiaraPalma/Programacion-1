//nos importamos a la clase Trapecio que proviene del archivo trapecio.js
import Trapecio from "./trapecio.js";

function ejecutar(){

   const base_mayor = document.getElementById("inp_bma").value
   const base_menor = document.getElementById("inp_bme").value
   const altura = document.getElementById("inp_h").value

    //creamos la instancia de la clase Trapecio
 const trapecio = new Trapecio(base_mayor,base_menor,altura)

  //mediante el uso de la  instancia invocamos y/o ejecutamos el 
  //en "respuesta" se almacena lo que se esta retornando
   const respuesta = trapecio.calcular_area_trap()
  
   document.getElementById("respuesta").textContent = 'Area trapecio :' + respuesta
}

document.getElementById("btn").addEventListener("click",ejecutar)