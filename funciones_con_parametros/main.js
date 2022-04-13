//esta funcion solo se enfocara en el calculo
function calcular(d1,d2)
{
   const resultado= d1*d2
   return resultado
}
/*Solo se enfocara en recolectar los
datos y entregar a la funcion calcular()
*/
function mostrar()
{
   //Forma 1(recoger dato1)
   const dato1 = document.querySelector("#inp_dato1").value
   
    //Forma 2 mas rapida
    const dato2 = document.getElementById("inp_dato2").value

    //Aca ejecutamos e invocamos a la funcion 
    const respuesta = calcular(dato1,dato2)

    document.getElementById("h_resultado").textContent = respuesta
}