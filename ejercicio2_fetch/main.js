const consumir =  async (categoria) =>{

    const datos = await fetch ('https://fakestoreapi.com/products/categories'+ categoria)

    const datos_definidos = await datos.json()

    let columnas = []
 //recorrer arrays
    usuarios_definidos.forEach(element => {
       

        let columna =
        `
        <div class="col-lg-3>
          <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
           <div class="card-body">
          <h5 class="card-title">Nombre</h5>
          <p class="card-text">Descripcion</p>
          <p class="card-text">Precio</p>
          <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        <div>

        `  
        filas.push(columna)
    });


}
consumir()