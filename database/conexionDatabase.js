import mongoose from 'mongoose';

export async function conectarConBaseDatos(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito de conexion en BD")
    }
    catch(error){
        console.log("Error en BD: " + error)
    }
}

