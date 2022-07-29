function almacenar_indice(indice)
{
   //indice en localStorage
   localStorage.setItem("indice",indice)
}

function editar(index)
{

   //buscamos en localStorage comidas y guardamos en lista_comidas
   let lista_comidas = JSON.parse(localStorage.getItem("comidas"))

   //buscamos los id, los guardamos en lista_comidas
  document.getElementById("inp_descripcion").value = lista_comidas[index].descripcion
  document.getElementById("inp_precio_venta").value = lista_comidas[index].precio_venta
  document.getElementById("slt_categoria").value = lista_comidas[index].categorias


  localStorage.setItem("indice",index)

  
  //apagamos el boton guardar
  document.getElementById("btn_guardar").style.display = "none"
  //prendemos  el bton actualizar
  document.getElementById("btn_actualizar").style.display = "block"
}