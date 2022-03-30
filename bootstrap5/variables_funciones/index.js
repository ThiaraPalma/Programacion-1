//funcion clasica
function mostrar_mensaje() {
    
    alert('Probando mi funcion')
}
function mostrar_en_consola(){
    //asignamos una cadena de string en una constante
    const nombre_apellido = 'Palma Thiara Celeste'

    /*Forma 1- sin template string */
   console.log('Nombre y apellido:'+ nombre_apellido)

   //Forma 2 - Template string - backtick
   console.log(`
     Nombre y apellido: ${nombre_apellido} -
     DNI 3325587
     Direccion:Gonzalez La Rosa 1267`)
}

//condicionales
function validar(){
    const calificacion = prompt('Ingrese su calificacion:');
    //condicion - forma 1
   /* if(calificacion >= 7){
     alert('Estas aprobado')
    }else{
        alert('Nos veremos en diciembre!')
    }*/

    //expresion ternario
    (calificacion >= 7) ? alert('Estas aprobado') : alert('Desaprobado')
}

//Funcion con retorno y comunicacion entre funciones 
  function calcular()
  {
    const number= prompt('Ingresa un numero: ')
    const resultado = number * 10
    return resultado
   //estamos entregando una respuesta
  }
  function visualizar()
  {
     //invocamos (ejecutamos) la funcion calcular 
    const respuesta = calcular()
    alert(respuesta)
  }