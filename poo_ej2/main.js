import Batman from "./batman.js";
//importamos
function importar_batman (){
 
    const batman = new Batman ()

    batman.consumir_api()
 


}
document.getElementById("btn").addEventListener("click",importar_batman)

