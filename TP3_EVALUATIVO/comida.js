export default class Comida{
     //a contructor le indicamos cuantos parametros recibira y en que orden 
    constructor(d,pv,i,c){
        this.descripcion = d
        this.precio_venta = pv
        this.imagen = i
        this.categorias = c

    }
   
     guardar_comida(){

        let nueva_comida ={
            descripcion: this.descripcion,
            precio_venta:this.precio_venta,
            imagen:this.imagen,
            categorias : this.categorias

        }

        if ("comidas" in localStorage){

           let lista_comidas = JSON.parse( localStorage.getItem("comidas"))

           lista_comidas.push(nueva_comida)
           localStorage.setItem("comidas", JSON.stringify(lista_comidas))

        }else{
            let lista_comidas =[]

            lista_comidas.push(nueva_comida)

            localStorage.setItem("comidas", JSON.stringify(lista_comidas) )
        }
      
        
       this.obtener_comidas()

       this.vaciar_formulario()

      
    }
  
    obtener_comidas(){

      if("comidas" in localStorage){
        let lista_comidas= JSON.parse(localStorage.getItem("comidas"))

        let filas = []

        lista_comidas.forEach((element, index )=> {
          let fila=`
          <tr> 
          <td>${index+1}</td>
            <td>${element.descripcion}</td>
            <td>${element.precio_venta})</td>
            <td> <img src="${element.imagen}" alt="" style="width:8rem"></td>
           <td>${element.categorias}</td>
            
            <td>
            <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal"  id="btn-guardar" class=" btn btn-danger ">
              <i class="fa fa-trash"></i>
            </button>

            <button onclick="editar(${index})" class="btn btn-primary btn-sm">
                <i class="fa fa-edit">   </i>
            </button>
            </td>
          </tr>
          `
          filas.push(fila)
        });

        document.getElementById("tbody").innerHTML = filas.join('')
      }
       
      }
     
     eliminar_comida(indice){

      let lista_comidas = JSON.parse(localStorage.getItem("comidas"))

      lista_comidas.splice(indice,1)

      localStorage.setItem("comidas", JSON.stringify(lista_comidas))

      this.obtener_comidas()
    }

    actualizar_comida()
    {
      let indice = localStorage.getItem("indice")

      let lista_comidas = JSON.parse(localStorage.getItem("comidas"))
       
      //Recogemos valores actualizados y los sustituimos o "pisamos" sobre los viejos
      lista_comidas[indice].descripcion = document.getElementById("inp_descripcion").value
      lista_comidas[indice].precio_venta = document.getElementById("inp_precio_venta").value
      lista_comidas[indice].categorias = document.getElementById("slt_categoria").value

      //guardamos en Storage la lista de productos alterada(actualizada)
      localStorage.setItem("comidas",JSON.stringify(lista_comidas))

      this.obtener_comidas()
     

      document.getElementById("btn_guardar").style.display = "block"
      document.getElementById("btn_actualizar").style.display = "none"

      this.vaciar_formulario()

    }

    vaciar_formulario(){

      document.getElementById("form_producto").reset()

    }
  

}
