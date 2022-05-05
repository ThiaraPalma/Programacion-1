
/*En esta funcion calcular llevamos a cabo la operacion o solucion del resultado  
*/
function calcular(){
    /*
     Buscamos y recogemos  el tipo de auto seleccionado y lo guardamos en la constante
      auto
     */
     const auto = document.getElementById("slh_autos").value 
     /*
     resultado es vacio
     */
     let resultado = null
     if (auto == 1950000 ){
        resultado =  1950000 -   (( 1950000 * 5) / 100) 
    }else{ 
        if (auto == 2560000 ){
            resultado = 2560000 - ((2560000 * 10) /100) 
        } else{
             resultado =   175000 -((175000 * 15) / 100) 
            }

        }

       /*
       BUscamos el h1 y al resultado lo guardamos en h1 asi lo mostramos en pantalla
       */
        document.getElementById("h_resultado").textContent = resultado


   
}


/*
obtenemos el boton de calcular y guardarlo en la constante "boton"
*/

const boton = document.getElementById ("btn_calcular")

/*
Agregamos e ivento a escuchar el "click" para mostrar o ejecutar la funcion "calcular"
*/
boton.addEventListener("click", calcular)
 


