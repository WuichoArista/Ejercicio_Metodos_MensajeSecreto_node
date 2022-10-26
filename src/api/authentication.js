const express = require( 'express' );
const authMiddleware = require('../middlewares/autentificacion')
const ruta = express.Router()

ruta.use(authMiddleware);
ruta.get('/me' , ( req ,res ) => {
    res.send({
        correo: 'achuchitalabolsearon@gmail.com',
        nombre:'chuchita',
        apellido:'bolsearon',
        role:'admin'
    })
})

module.exports = ruta