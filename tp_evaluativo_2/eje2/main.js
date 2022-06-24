//Creamos el arreglo "criptos"
let criptos=["Bitcoin","Ethereum","Tether","BNB","Cardano","Dai","Helium","Shiba Inu","Tron","Cronos","Solana"]

//Arreglo "criptos" le inserta la criptomoneda"Stellar" al inicio
criptos.unshift("Stellar")
//A el arrays "criptos" (con la agregacion de "stellar" al inicio) o mostramos en consola
console.log(criptos)

// Elemento 8(Shiba Inu)
const posicion =8;
//le decimos que solo elimine dos elementos, es decir, (Shiba Inu) y el siguente
const numeroElementos = 2
 //Va a eliminar del elemeonto Shiba Inu y de ahi va a eliminar dos criptomonedas(elementos).Y lo guardamos en la constante
const elementosEliminados = criptos.splice(posicion, numeroElementos)
//A los datos de la constnate "elementosEliminados" la mostramos en consola
console.log(elementosEliminados)
//Mostramos el arrays "criptos" con los elementos eliminadoos
console.log(criptos)

//Agregamos  la criptoneda "Gate"
criptos.push('Gate')
//Mostramos el arrays con elemento añadido
console.log(criptos)

// Conocemos la longuitud de  array y lo guardamos en la constante
const longuitud = criptos.length

//Accedemos al ulitmo elemento y lo almacenamos en la constante "ultimo"
const ultimo = criptos[longuitud-1] 

//Buscamos el indice de la criptomoneda"Helium"
const indice = criptos.indexOf("Helium")

//Obtenido el indice de la criptomoneda "Helium", la mostramos en un parrafo
const primero = criptos[indice]

const imprimir = () =>{
    //Buscamos los ids de los parrafos y en ellos guardamos la informacion adquirida
    document.getElementById("p1_resultado").textContent = "Longuitud del arreglo: " + longuitud
    document.getElementById("p2_resultado").textContent = "Ultimo elemento del arreglo: " + ultimo
    document.getElementById("p3_resultado").textContent = "Indice de la griptomoneda o elemento Helium : " + indice
    document.getElementById("p4_resultado").textContent = "Imprimiendo criptomoneda anteriormente mencionada: " + primero
}
//Buscamos a el boton "btn_calcular" y lo guardamos en la constante "boton"
const boton= document.getElementById("btn_calcular")
// A el boton invento a escuchar "click" para que ejecute a la funcion "imprimir()"
boton.addEventListener("click",imprimir)


//Creamos funcion flecha "generar"
function generar(){
   //Creamos array "filas"
    let filas=[]
     //Recorremos a arreglo, mientras los elementos recorridos los alamcenamos en array "fila"
     criptos.forEach( Element => {
        let fila=`

        <li class="list-group-item">${Element}</li>
        `
       //A los elementos O datos del arreglo  "fila" lo mandamos a el otro arreglo "filas"
        filas.push(fila)
    });
    // Buscamos a id"list_user" y en el guardamos a "filas"(sin comillas)
    document.getElementById("list_user").innerHTML = filas.join('')
}
//Buscamos a el boton "btn_calcular2" y lo guardamos en la constante "boton2"
const boton2= document.getElementById("btn_calcular2")
// A el boton invento a escuchar "click" para que ejecute a la funcion "generar"
boton2.addEventListener("click",generar)



