export default class Producto{
    //constructor recibe y la info la guarda en atributos
    //importa el orden de los parametros
    constructor(d,pv,c){
        this.descripcion = d
        this.precio_venta = pv
        this.categorias = c
    }
 //metodo
    guardar_producto(){

        //arrays de objetos
        let nuevo_producto ={
            descripcion: this.descripcion,
            precio_venta:this.precio_venta,
            categorias : this.categorias

        }

        if ("productos" in localStorage){

            /*convertimos el JSON  obtenido desde el storage 
            en una expresion nativa de JavaScript(arrays de objetos) */
           let lista_productos = JSON.parse( localStorage.getItem("productos"))

           lista_productos.push(nuevo_producto)
           localStorage.setItem("productos", JSON.stringify(lista_productos))

        }else{
            let lista_productos=[]

          // en el arrays lista_producto insertamos nuevo_producto
            lista_productos.push(nuevo_producto)

            //guardamos en el storage
            localStorage.setItem("productos", JSON.stringify(lista_productos) )
        }
      
        /*invoco nuevamente el metodo obtener_productos()  para
        lograr reconstruir la tabla, y asi reflejar los datos actualizados 
        que provienen del localStorage, especificamente del item "productos" */
       this.obtener_productos()


    }
    obtener_productos(){
        /*Recolectamos todos los productos alojados en el item  "productos"
        que estan en la notacion JSON.Debemos convertilo en una expresion
        nativa  de JavaScript (es decir,hacemos un JSON.parse() )
        */
       let lista_productos = JSON.parse(localStorage.getItem("productos"))

       let filas = []
       lista_productos.forEach((element, index )=> {
        let fila=`
        <tr> 
        <td>${index+1}</td>
          <td>${element.descripcion}</td>
          <td>${element.precio_venta}</td>
          <td>${element.categorias}</td>
          <td>
          <button  id="btn_guardar" class=" btn btn-success">
          <i class="fa fa-trash"></i>
           </button>
          </td>
        </tr>
        `
        filas.push(fila)
       });

       document.getElementById("tbody").innerHTML = filas.join('')
        
    }
}