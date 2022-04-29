function calcular(d1,d2,select){
    let resultado = null
    if (select == 0){
        resultado = parseInt (d1) + parseInt (d2)
    }else{ 
        if (select == 1){
        resultado = parseInt (d1) - parseInt (d2)
    }else{
        if (select == 2){
            resultado = parseInt (d1) / parseInt (d2)
    }else{
    resultado = parseInt (d1) * parseInt (d2)
      }

    }
}

function mostrar(){
 //recoge las valores
    const seleccionado = document.getElementById("sth_calcular").value

    const dato1 = document.getElementById("inp_dato1").value
    const dato2 = document.getElementById("inp_dato2").value
  // Los envia a la funcion calcular y luego la ejecuta
    const respuesta = calcular(dato1,dato2,seleccionado)

    document.getElementById("h_resultado").textContent = respuesta
    
}

const boton = document.getElementById ("btn_calcular")

boton.addEventListener("click", mostrar)