const express = require('express');
const ruta = express.Router()

ruta.get('/' , ( req , res ) => {
    res.send({
        mensaje: 'ahi mero va'
    })
})

module.exports = ruta