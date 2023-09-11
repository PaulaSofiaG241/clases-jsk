/* tiene cuatro tipos de vehiculos
ciclas: 500, motos: 1000, carros: 1500, camion: 3000
el sistema debe pedir la hora de ingreso y salida  
debe mostrar el tiket, nombre, placa o descripcion, el valor total y el tiempo de permanencia*/

const cicla = 500
const motos = 1000
const carro = 1500
const camion = 3000

class parqueadero{
    saludo = (nombre, placa)=>{
        console.log ("Hola "+nombre +" bienvenido al servicio de parqueadero")
        console.log ("tu vehiculo"+" de placa "+placa)
    }
    tiempo= (ingreso, salida )=>{
       let tiempo= salida-ingreso
       return tiempo
    }
    valor =(horas, vehiculo)=>{
        let valor= horas* vehiculo
        return valor
    }
}
obj = new parqueadero()
let tiket = obj.saludo("Paula","HGT 263")
let horas = obj.tiempo(8, 10) 
let precio = obj.valor(horas, motos)
console.log("Ingreso por un tiempo de "+horas +"horas")
console.log("Su precio a pagar es de "+ precio)
