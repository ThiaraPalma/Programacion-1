let consolas=['Playstation','Xbox','Nintendo Game Cube','Sega DreamCast','Game Boy Advanced']

const posicion =2;
const numeroElementos = 2
const elementosEliminados = consolas.splice(posicion, numeroElementos)
console.log(elementosEliminados)
console.log(consolas)


consolas.push('Nintendo 64')
console.log(consolas)


consolas.unshift("Nintendo Wii")
console.log(consolas)



const longuitud = consolas.length

const ultimo = consolas[longuitud-1] 

const primero = consolas[2]

const imprimir = () =>{
    
    document.getElementById("p1_resultado").textContent = "Longuitud del arreglo: " + longuitud
    document.getElementById("p2_resultado").textContent = "Ultimo elemento del arreglo: " + ultimo
    document.getElementById("p3_resultado").textContent = "Indice del arreglo: " + primero

}
const boton= document.getElementById("btn_calcular")

boton.addEventListener("click",imprimir)



function generar(){

    let filas=[]
       // index=numero
    consolas.forEach( (element,index) => {
        let fila=`
        <tr>
         <td>${index+1}</td>
         <td>${element}</td>
       </tr> `

        filas.push(fila)
    });
    document.getElementById("tbl_body").innerHTML = filas.join('')
}
const boton2= document.getElementById("calcular2")

boton2.addEventListener("click",generar)
