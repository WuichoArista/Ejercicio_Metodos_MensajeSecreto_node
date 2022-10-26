const express = require('express');
const rutaAuthentication = require('./authentication');
const rutaLogearse = require( './logearse' );
const rutaMetodos = require('./Metodos')
const rutaMensaje = require('./MensajeSecreto')
const ruta = express.Router();


ruta.use( '/autentificacion' , rutaAuthentication )
ruta.use('/logearse' , rutaLogearse)
ruta.use('/metodos' , rutaMetodos)
ruta.use('/mensaje' , rutaMensaje)

module.exports = ruta