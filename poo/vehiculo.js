export default class Vehiculo {

    //aca irian los atributos
    constructor(k,m){
        this.marca=m
        this.kilometros=k

    }



    mostrar_km()
    {
        alert(this.kilometros)
    }
}