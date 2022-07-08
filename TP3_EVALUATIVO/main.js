import Comida from"./comida.js";

function guardar(){
    //buscamos los datos insertados y las guardamos
       let descripcion = document.getElementById("inp_descripcion").value
       let precio_venta= document.getElementById("inp_precio_venta").value
       let categorias = document.getElementById("slt_categoria").value
   
   
   
   
      //importa el orden de los parametros y como estan declarados los lets
      //Creamos instancia
       let producto = new Comida(descripcion,precio_venta,categorias)
   
       /*invocamos(ejecutamos) al metodo producto_producto(), perteneciente a la clase Producto*/
        producto.guardar_comida()
   }
   document.getElementById("btn_guardar").addEventListener("click",guardar)

   function listar (){
    let comida= new Comida()
    comida.obtener_comidas()
   }
   listar()


   function eliminar(){
   let indice = localStorage.getItem("indice")
   //creeamos una  instancia para poder acceder a los metodos y atributos de la clase Producto
   let comida = new Comida()
 //haciendo uso de la instancia invocamos  al metodo eliminar_producto()
   comida.eliminar_comida(indice)
}

document.getElementById("btn_eliminar").addEventListener("click", eliminar)

function actualizar(){
    
    //creamos la instancia producto
    let comida = new Comida()
 
    /*
     Y atraves de la instancia accedemos e invocamos al metodo 
     acutualizar_producto() existen en archivo producto.js
     */
    comida.actualizar_comida()
 
 }
 
 document.getElementById("btn_actualizar").addEventListener("click", actualizar)