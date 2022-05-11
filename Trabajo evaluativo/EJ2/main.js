/*
En esta funcion calcular llevamos a cabo la operacion o solucion del resultado  
*/
const calcular = (tem) =>{
    /*
    El resultado es igual a vacio ya que no depende de lo que 
    ingresemos sera el resultado
    */
    let resultado = null
    if (tem  >= 14 && tem <=32){
        resultado = "Temperatura baja"
    }else{ 
        if (tem >32  && tem <=68){
            resultado = "Temperatura adecuada"
        }else{
            if (tem >68 && tem <=96){
                resultado = "Temperatura alta"
            } else{
                resultado = "Temperatura desconocida"
            }

        }

    }
    
    /*
    retornando o entregando como respuesta el resultado 
    */
    return resultado
}
 
 
const mostrar = () => {
    /*
    Recogemos y encontramos el dato o valor de la temperatura y la guardamos en la constante 
    "Temperatura"
    */

    const Temperatura = document.getElementById("inp_dato").value

 /*
 Invocamos a la funcion calcular 
 */
    const respuesta = calcular(Temperatura)
    /*
    Encontramos el h1 donde vamos a guardar la respuesta del problema
    */
  
    document.getElementById("h_resultado").textContent = respuesta

}

/*
obtenemos el boton de calcular y guardarlo en la constante "boton"
*/
const boton = document.getElementById ("btn_calcular")
/*
Agregamos e ivento a escuchar el "click" para mostrar o ejecutar la funcion "mostrar"
*/
boton.addEventListener("click", mostrar)