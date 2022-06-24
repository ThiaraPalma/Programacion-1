// Creamos Objeto
const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    características: {
   lenguaje: 'TypeScript',
   patron: 'MVVM',
   spa: 'si'
    },
   }
//Creamos funcion flecha "mostrar()"
const mostrar = () =>{
    const {titulo,nombre} =framework
    const{lenguaje,patron,spa} =framework.características
 
    //Mostramos o imprimimos informacion
    console.log(`

    Titulo:${titulo}
    Nombre:${nombre}
    Caracteristicas:
    Lemguaje:${lenguaje}
    Patron:${patron}
    Spa:${spa}
    
    `)
}
//Buscamos a el boton "btn_calcular" y lo guardamos en la constante "boton"
const boton= document.getElementById("btn_calcular")
// A el boton invento a escuchar "click" para que ejecute a la funcion "mostrar"
boton.addEventListener("click",mostrar)