import Comida from"./comida.js";

function guardar(){
         //buscamos  datos insertados en formulario y los guardamos 
       let descripcion = document.getElementById("inp_descripcion").value
       let precio_venta= document.getElementById("inp_precio_venta").value
       let imagen = document.getElementById("inp_imagen").value
       let categorias = document.getElementById("slt_categoria").value
   
   
   
   
       //Creamos instancia e insertamos parametros que recibiremos(importa  el orden)
       let producto = new Comida(descripcion,precio_venta,imagen,categorias)
   
       /*invocamos a  metodo producto_producto(), que pertenece a la clase Producto*/
        producto.guardar_comida()
   }
    //buscamos a el boton guardar e inventamos a click para que ejecute la funcion "guardar"
   document.getElementById("btn_guardar").addEventListener("click",guardar)

   function listar (){
    let comida= new Comida()
    comida.obtener_comidas()
   }
   listar()


   function eliminar(){
   let indice = localStorage.getItem("indice")
   //creeamos instancia para poder acceder a los metodos y atributos de clase Producto
   let comida = new Comida()
   //utilizando  la instancia invocamos  al metodo eliminar_producto()
   comida.eliminar_comida(indice)

   const truck_modal = document.querySelector('#mymodal');
    const modal = bootstrap.Modal.getInstance(truck_modal);    
    modal.hide()
}
 //buscamos a boton eliminar e inventamos a click para que ejecute la funcion "eliminar"
document.getElementById("btn_eliminar").addEventListener("click", eliminar)

function actualizar(){
    
    //creamos la instancia producto
    let comida = new Comida()
 
    /* mediante de la instancia accedemos e invocamos al metodo 
     acutualizar_producto() que existe en el archivo comida.js*/
    comida.actualizar_comida()
 
 }
 //buscamos a boton actualizar e inventamos a click para que ejecute la funcion "actualizar"
 document.getElementById("btn_actualizar").addEventListener("click", actualizar)


 