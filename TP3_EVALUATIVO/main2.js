
const consumir_productos =  async () =>{

  const datos = ( JSON.parse( localStorage.getItem("comidas")))


 let columnas = []
 datos.forEach(element => {

    let columna =
    `  
    <div class="col-lg-4 mb-3"  >

    <div class="card">
    <h5 class="card-title">${element.descripcion}</h5>
    <div class="card-body">
    <img src="${element.imagen}" class="card-img-top"  alt="" style="height:170px" >
    </div>
    <div class="card-body">
      <button onclick="agregar_a_tabla('${element.descripcion}','${element.precio_venta}')"class="btn btn-primary">Guardar</button>
    </div>
   </div>

   </div>
    `
    columnas.push(columna)

});
document.getElementById("formulario").innerHTML = columnas.join('')
}
consumir_productos()



function agregar_a_tabla(d,p){

      let nuevo_pedido = {
        descripcion:d,
        precio:p,
        cantidad:1
      }

       if ("pedidos" in localStorage){

          let lista_pedidos = JSON.parse( localStorage.getItem("pedidos"))

          lista_pedidos.push(nuevo_pedido)
          localStorage.setItem("pedidos", JSON.stringify(lista_pedidos))

      }else{
          let lista_pedidos =[]

          lista_pedidos.push(nuevo_pedido)

          localStorage.setItem("pedidos", JSON.stringify(lista_pedidos) )
      }

      construir_tablita()

}




function construir_tablita()

{

  
  if("pedidos" in localStorage){
    let lista_pedidos= JSON.parse(localStorage.getItem("pedidos"))

    let filas = []

    lista_pedidos.forEach((element, index )=> {
      let fila=`
      <tr> 
      <td>${index+1}</td>
        <td>${element.descripcion}</td>
        <td>${element.precio})</td>
      </tr>
      `
      filas.push(fila)
    });

    document.getElementById("tbody").innerHTML = filas.join('')

}
}
construir_tablita()

