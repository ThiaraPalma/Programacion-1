const consumir_productos =  async (categoria) =>{

    const datos = await fetch ('https://fakestoreapi.com/products/category/'+ categoria)

    const datos_definidos = await datos.json()

    let columnas = []
   //recorrer arrays
    datos_definidos.forEach(element => {
       

        let columna =
        `
        <div class="col-lg-3">
         <div class="card" >
            <img src="${element.image}" class="card-img-top" style="height:250px"  alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              
              <p>

                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample_${element.id}" aria-expanded="false" aria-controls="collapseExample">
                 Descripcion
                </button>
              </p>
                <div class="collapse" id="collapseExample_${element.id}">
                  <div class="card card-body">
                   <p class="card-text">${element.description}</p>
                  </div>
                </div>
                  <p class="card-text"> $ ${element.price}</p>
                  <a href="#" class="btn btn-primary">Comprar</a>
           </div>
       </div>
      </div>
        `  
        columnas.push(columna)
    }
    );


    document.getElementById("catalogo").innerHTML = columnas.join('')

}



