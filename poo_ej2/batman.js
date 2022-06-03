export default  class Batman{

    constructor(){

    }
    async consumir_api(){
        
        const batman = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')

        const lista_batman = await batman.json()


        //elemento=iterator
        for (const iterator of lista_batman.Search) {
           console.log( `
           ${iterator.imdbID}
           ${iterator.Title}
           ${iterator.Year}
           ${iterator.Poster}

           `) 
        }
   }
}