
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
      <a href="#" class="btn btn-primary">Guardar</a>
    </div>
   </div>

   </div>
    `
    columnas.push(columna)

});
document.getElementById("formulario").innerHTML = columnas.join('')
}
consumir_productos()

function agregar_a_tabla(indice){
let lista= Json.parse(localStorage.getItem("comida"))
}


