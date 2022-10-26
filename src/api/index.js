const express = require('express');
const rutaAuthentication = require('./authentication');
const rutaLogearse = require( './logearse' );
const ruta = express.Router();


ruta.use( '/autentificacion' , rutaAuthentication )
ruta.use('/logearse' , rutaLogearse)

module.exports = ruta