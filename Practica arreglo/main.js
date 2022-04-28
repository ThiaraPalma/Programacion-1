 var lenguajes =['Python','JavaScript', 'Csharp', 'C++', 'Java','PHP', 'Ruby']

 function imprimir(){
    const longuitud = lenguajes.length
    console.log('Longitud del arreglo:' + longuitud)

    const ultimo = lenguajes[longuitud-1] 
   console.log('Ultimo elemento del array: '+ultimo)

   const tercero = lenguajes[2]
  console.log('Tercer elemento: ' + tercero)
}

function recorrer (){
    lenguajes.forEach( (element,index) => {

        console.log(index+'-'+element)
        
    });
}

lenguajes.push('Go')
console.log(lenguajes)

lenguajes.shift()
console.log(lenguajes)

lenguajes.unshift('Kotlin')
console.log(lenguajes)

const posicion =4;
const numeroElementos = 2
const elementosEliminados = lenguajes.splice(posicion, numeroElementos)
console.log(elementosEliminados)
console.log(lenguajes)

