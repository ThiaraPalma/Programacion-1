function pasar(tem){
    const resultado = ( tem * 1.8 ) + 32
    return resultado
}

function mostrar(){
    
    const tem = document.querySelector( "#inp_temperatura").value

    const respuesta = pasar(tem)

    document.getElementById("h_resultado").textContent = respuesta
}