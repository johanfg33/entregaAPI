import express from 'express'
import { rutas } from '../routes/rutaApi.js' 
import { conectarConBaseDatos } from '../database/conexionDatabase.js'

export class API{

    constructor(){
        this.app = express()
        this.conectarConBD()
        this.atenderPeticiones()
    }

    levantarServidor(){
        this.app.listen(process.env.PORT, function (){
            console.log("Servidor encendido: " + process.env.PORT)
        })
    }

    conectarConBD(){
        conectarConBaseDatos()
    }

    atenderPeticiones(){
        this.app.use(express.json()) //Habilita la recepcion de datos por el body de la peticioncc
        this.app.use('/', rutas)
    }
}