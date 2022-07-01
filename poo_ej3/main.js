import Producto from"./producto.js";

function guardar(){
 //buscamos los datos insertados y las guardamos
    let descripcion = document.getElementById("inp_descripcion").value
    let precio_venta= document.getElementById("inp_precio_venta").value
    let categorias = document.getElementById("slt_categoria").value




   //importa el orden de los parametros y como estan declaradas los lets
   //Creamos instancia
    let producto = new Producto(descripcion,precio_venta,categorias)

    /*invocamos(ejecutamos) al metodo producto_producto(), perteneciente a la clase Producto*/
     producto.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener("click",guardar)
 //funcion listar invoca a la funcion obtener_datos()
function listar (){
 let producto = new Producto()
 producto.obtener_productos()
}
listar()