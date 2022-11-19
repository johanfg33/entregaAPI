import { ServicioReserva } from "../services/ServicioReserva.js"

export class ControladorReserva{

    constructor(){}

    async agregarReserva(request, response){

        let objetoServicio = new ServicioReserva()
        let datosARegistrar = request.body

        try{
            await objetoServicio.agregarReserva(datosARegistrar)
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
    async consultarReservas(request, response){
        let objetoServicio = new ServicioReserva()
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busquedad de habitaciones",
                "datos":await objetoServicio.buscarTodasReservas()
            })

        } catch(error){
            response.status(400).json({
                "mensaje":"Fallo: " + error, 
                "datos":null
            })
        }
    }
    async consultarReserva(request, response){
        let objetoServicio = new ServicioReserva()
        let id = request.param.id
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":await objetoServicio.buscarReservaPorId(id)
            })

        } catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta" + error,
                "datos":null
            })
        }
    }
    async editarReserva(request, response){
        let objetoServicio = new ServicioReserva()
        let id = request.param.id
        let datosAEditar = request.body
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":await objetoServicio.editarReserva(id,datosAEditar)
            })

        } catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta" + error,
                "datos":null
            })
        }
    }
}