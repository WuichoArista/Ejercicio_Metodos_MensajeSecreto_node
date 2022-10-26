const express = require( 'express' );
const ruta = express.Router()
const jwt = require('jsonwebtoken');
require('dotenv').config();

let JWT_SECRET = process.env.JWT_SECRET;

ruta.post('/' , (req ,res) => {
    const { usuario , email } = req.body
    if( email !== 'achuchitalabolsearon@gmail.com'){
        return res.status(404).send({
            mensaje: 'usuario no encontrado'
        });
    }else{
        const rollUsuario = {
            email,
            usuario,
            permiso:['me']
        };
        const token = jwt.sign({
            data:rollUsuario
        } , JWT_SECRET , {
            expiresIn: 60 * 60
        });
        res.status(201).send({
            auth:true,
            token
        })
    };  
})


module.exports = ruta