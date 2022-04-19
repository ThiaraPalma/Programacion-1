const calcular = (l1,l2,l3) =>{
    const resultado =  parseInt (l1)  +  parseInt(l2) + parseInt (l3)
    const cartel = (resultado ==180)? "Es valido" : "No es valido"
    return resultado + "=" + cartel


}
const mostrar = () => {
    const l1 = document.getElementById("inp_dato1").value
    const l2 = document.getElementById("inp_dato2").value
    const l3 = document.getElementById("inp_dato3").value
    
    const respuesta = calcular(l1,l2,l3)
  
    document.getElementById("h_resultado").textContent = respuesta

}
const boton = document.getElementById ("btn_calcular")
boton.addEventListener("click", mostrar)