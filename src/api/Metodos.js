const express = require('express');
const ruta = express.Router()

ruta.get( '/' , (req , res) => {
    const nombre = [ 'Luis' , 'Miguel' , 'Brian' , 'Roberto' , 'Michele']
    console.log( 'arreglo original ',nombre);

    let map = nombre.map ( (n , i) => n + ` ${i + 1}`)
    console.log( 'map transofrma un arreglo: ',map);

    let filter = nombre.filter( n => n === 'Michele')
    console.log('filter filtra un elemento en el array: ',filter);

    let find = nombre.find( n => n === 'Roberto')
    console.log('find encuentra y devuelve el elemento dentro del array: ',find);

    let findIndex = nombre.findIndex( n => n === 'Brian')
    console.log('findIndex devuelve la posicion de un elemento en el array: ',findIndex);

    let every = nombre.every( n => n === 'Luis')
    console.log('every revisa que todo los elementos del array sean iguales a lo indicado y devulve true o false: ',every);

    let some = nombre.some( n => n === 'Miguel')
    console.log('some revisa si alguno de los elementos en el array es igual a lo indicado y devulve true o fasle: ',some);

    let join = nombre.join(' + ')
    console.log('join convierte el array en string agregando el elemento seleccionado en este caso el simbolo +:',join)

    let fill = nombre.fill( 'Hola' )
    console.log('fill cambia todo el arreglo a un valor indicado: ',fill);

    res.send({
        arreglo: nombre,
        map,
        filter,
        find,
        findIndex,
        every,
        some,
        join,
        fill
    })
})

module.exports = ruta