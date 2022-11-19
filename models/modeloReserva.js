import mongoose from "mongoose";

//Definiendo nuestro espacio de datos
const Schema = mongoose.Schema;

const EsquemaReserva = new Schema({
    fechaEntrada:{
        required:true,
        type:Date
    },
    fechaSalida:{
        required:true,
        type:Date
    },
    NumeroNinos:{
        required:true,
        type:Number
    },
    NumeroAdultos:{
        required:true,
        type:Number
    },
    idHabitacion:{
        required:true,
        type:String
    },
    costo:{
        required:true,
        type:Number
    }
});

export const modeloReserva = mongoose.model('reserva',EsquemaReserva);