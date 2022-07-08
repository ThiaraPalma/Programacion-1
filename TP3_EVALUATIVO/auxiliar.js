function almacenar_indice(indice)
{
   localStorage.setItem("indice",indice)
}

function editar(index)
{
   let lista_comidas = JSON.parse(localStorage.getItem("comidas"))

  document.getElementById("inp_descripcion").value = lista_comidas[index].descripcion
  document.getElementById("inp_precio_venta").value = lista_comidas[index].precio_venta
  document.getElementById("slt_categoria").value = lista_comidas[index].categorias

  localStorage.setItem("indice",index)

  
  //apago el boton guardar
  document.getElementById("btn_guardar").style.display = "none"
  //encendemos el bton actualizar
  document.getElementById("btn_actualizar").style.display = "block"
}