import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{

    constructor(){}

    //consultar habitacion
    async agregarHabitacion(request, response){

        let datosARegistrar = request.body 
        let objetoServicio = new ServicioHabitacion()

        try{
            await objetoServicio.agregarHabitacion(datosARegistrar)
            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":null
            })

        } catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta" + error,
                "datos":null
            })
        }
    }
    async consultarHabitaciones(request, response){
        let objetoServicio = new ServicioHabitacion()
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busquedad de habitaciones",
                "datos":await objetoServicio.buscarTodasHabitaciones()
            })

        } catch(error){
            response.status(400).json({
                "mensaje":"Fallo: " + error, 
                "datos":null
            })
        }
    }
    async consultarHabitacion(request, response){
        let id = request.params.id
        let objetoServicio = new ServicioHabitacion()
        console.log(id)
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":await objetoServicio.buscarHabitacionPorId(id)
            })

        } catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta" + error,
                "datos":null
            })
        }
    }
    async editarHabitaciones(request, response){
        let id = request.params.id
        let datosAEditar = request.body
        let objetoServicio = new ServicioHabitacion()
        try{
            await objetoServicio.editarHabitacion(id,datosAEditar)
            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":null
            })

        } catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta" + error,
                "datos":null
            })
        }
    }
}