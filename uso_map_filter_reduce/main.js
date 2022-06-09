const tareas =[

    //objetos
    {
        //propiedades
        nombre:'Testeando soft',
        duracion:25
    },
    //objetos
    {
        nombre:'Implementacion de alta cliente',
        duracion: 90
    },
    {
        nombre:'Deploy de soft',
        duracion: 120
    },
    {
        nombre:'Correcion de bug',
        duracion: 180
    },

]

//metodo clasico
//arrays
let nombres=[]

tareas.forEach(element => {

    nombres.push(element.nombre)
    
});



//Uso del metodo map() o plicando map() 
 let nombres2 = tareas.map(tarea => tarea.nombre)


//USO DE FIL
let tareas_prolongadas = []

    tareas.forEach(element => {

     if(element.duracion >= 120)

     tareas_prolongadas.push(element)
   });

     console.log(tareas_prolongadas)

//Filtrar haciendo uso del metodo Filter() 

const tareas_prolongadas2 = tareas.filter(tarea => {

   return tarea.duracion>= 120
})
console.log(tareas_prolongadas2)