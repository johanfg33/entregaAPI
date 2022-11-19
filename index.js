import * as dotenv from 'dotenv'
dotenv.config()

import {API} from './API/API.js'

//Creamos un objeto de la clase API 
let apiHotel = new API()

//Encender el servidor
apiHotel.levantarServidor()