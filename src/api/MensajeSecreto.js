const express = require('express');
const ruta = express.Router();

ruta.use('/' , (req , res) => {
    let mensaje = ['Harnold', 'Olga', 'Luis', 
                'Antonio','Mario','Israel',
                'Carlos','Hector','Elsa','Laura','Ezio']

    console.log(mensaje)

    let mensajeSecreto = mensaje.map(function (item){
        return item[0]
    })

    console.log(mensajeSecreto)
    console.log(mensajeSecreto.join(''))

    res.send({
        mensaje,
        mensajeSecreto
    })

})

module.exports = ruta