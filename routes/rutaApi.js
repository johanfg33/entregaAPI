import express from 'express'

import {ControladorHabitacion} from '../controllers/controladorHabitacion.js'
import {ControladorReserva} from '../controllers/controladorReserva.js'

//En el archivo de rutas creo una variable encargada de definir todos los ENDPOINTS

//Por cada servicio que ofrece mi API debo tener un ENDPOINT o ruta
export let rutas = express.Router()

//Creamos un objeto de la clase controlador
let controladorHabitacion = new ControladorHabitacion()
let controladorReserva = new ControladorReserva()


//DEFINO LAS RUTAS DE CADA SERVICIO
rutas.post('/api/hotel/habitaciones',controladorHabitacion.agregarHabitacion)
rutas.get('/api/hotel/habitaciones',controladorHabitacion.consultarHabitaciones)
rutas.get('/api/hotel/habitaciones/:id',controladorHabitacion.consultarHabitacion)
rutas.put('/api/hotel/habitaciones/:id',controladorHabitacion.editarHabitaciones)

//DEFINO LAS RUTAS DE CADA SERVICIO DE RESERVA
rutas.post('/api/hotel/reserva', controladorReserva.agregarReserva)
rutas.get('/api/hotel/reserva', controladorReserva.consultarReservas)
rutas.get('/api/hotel/reserva/:id', controladorReserva.consultarReserva)
rutas.put('/api/hotel/reserva/:id',controladorReserva.editarReserva)