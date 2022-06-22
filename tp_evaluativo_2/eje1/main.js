const obtener_casas= async() =>{
    //consuminos la API
    const casas = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    //La API consumida la convertimos a json y la cuerdamos en la constante "casas_definidas"
    const casas_definidas = await casas.json()
    //Creamos un arrays "filas", en el que luego se va almacenar los datos que se estan recorriendo en la API
    let filas=[]
     //Recorremos API convertida en json
     casas_definidas.forEach((element,index )=> {
      let fila = 
      `<tr>
         <td>${index+1}</td>
         <td>${element.casa.nombre}</td>
         <td>${element.casa.compra}</td>
         <td>${element.casa.venta}</td>
 
       </tr>`
       //A los elementos del arreglo  "fila" lo mandamos a el otro arreglo "filas"
       filas.push(fila)
   });
   // Buscamos el cuerpo de la tabla"tbl_body" y en el guardamos a "filas"(sin comillas)
   document.getElementById("tbl_body").innerHTML = filas.join('')
 
 }
 //invocamos la funcion  flecha "obtener_casas()"
 obtener_casas()