 const calcular1 = (n1,n2,n3) => {
 const bloque1 = Math.pow(n2,2) - (4*n1*n3)
 const bloque2 = ( Math.sqrt (bloque1))
 const bloque3 = (-n2 - (bloque2 )) / (2*n1)
 return 'Raiz 1 =' + bloque3
 }
 const calcular2 = (n1,n2,n3) => {
    const bloque1 = Math.pow(n2,2) - (4*n1*n3)
    const bloque2 = ( Math.sqrt (bloque1))
    const bloque3 = (-n2 + (bloque2 )) / (2*n1)
   return 'Raiz 2 =' + bloque3 
 }

  const mostrar = () => {
  
    const dato1 = document.getElementById("dato1").value
    const dato2 = document.getElementById("dato2").value
    const dato3 = document.getElementById("dato3").value

    const respuesta1 = calcular1(dato1,dato2,dato3)
    const respuesta2 = calcular2(dato1,dato2,dato3)


    document.getElementById("h_resultado1").textContent = respuesta1
    document.getElementById("h_resultado2").textContent = respuesta2
}

  const boton = document.getElementById("btn_calcular")

  boton.addEventListener("click", mostrar)