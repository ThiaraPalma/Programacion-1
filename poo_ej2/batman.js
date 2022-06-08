export default  class Batman{

    constructor(){

    }
    async consumir_api(){
        
        const batman = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')

        const lista_batman = await batman.json()
         
        let peliculas=[]

        //elemento=iterator
        for (const iterator of lista_batman.Search) {
           

         let pelicula =
         `
         <div class="col-lg-3">
          <div class="card" >
             <img src=" ${iterator.Poster}" class="card-img-top" style="height:250px"  alt="...">
             <div class="card-body">
                <h5 class="card-title"> ${iterator.Title}</h5>
               
                 <div class="card card-body">
                  <p class="card-text"> ${iterator.imdbID}</p>
                 </div>
                 <div class="card card-body">
                    <p class="card-text"> ${iterator.Year}</p>
                 </div>

      
            </div>
         </div>
         </div>
         `  
          peliculas.push(pelicula)
        }

        document.getElementById("catalogo_pelis").innerHTML = peliculas.join('')

   }
}