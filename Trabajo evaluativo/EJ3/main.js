/*En esta funcion llevamos a cabo la operacion del problema
*/
function calcular(a,b){
    const bloque1 = (Math.pow(a,2)) +  (Math.pow(b,2))
    const bloque2 =  Math.sqrt (bloque1)
    /*
    Guardamos la resolucion 
    */
    return 'Hipotenusa :'  +bloque2
}

 /*En esta funcion recolectamos los
datos y entregamos a la funcion calcular()
*/
function mostrar(){
    /*
   Buscamos y recolectamos  el cateto a del triangulo y lo guardamos en la constante dato1
    */
    const dato1 = document.getElementById("inp_dato1").value
  /*
  Buscamos y recolectamos el cateto  del triangulos y lo guardamos en la constante dato2
  */
    const dato2 = document.getElementById("inp_dato2").value

   /* Invocamos a la funcion calcular con los parametros que debera recibir, q en este caso son dos
   */

    const respuesta = calcular(dato1,dato2)

  /*
  Encontramos el h4 donde vamos a guardar la respuesta del problema
    
  */

    document.getElementById("h_resultado").textContent = respuesta

}