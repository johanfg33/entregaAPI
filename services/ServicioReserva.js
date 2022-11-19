import { modeloReserva } from "../models/modeloReserva.js";

export class ServicioReserva{

    async agregarReserva(reserva){
        let nuevaReserva = new modeloReserva(reserva)
        return await nuevaReserva.save()
    }
    async buscarTodasReservas(){
        let reservasEncontradas = await modeloReserva.find()
        return reservasEncontradas
    }
    async buscarReservaPorId(id){
        let reservasEncontrada = await modeloReserva.findById(id)
        return reservasEncontrada
    }
    async editarReserva(id,datosNuevos){
        return await modeloReserva.findByIdAndUpdate(id,datosNuevos)
    }

}