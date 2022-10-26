const express = require( 'express' );
const cors = require( 'cors' );
const rutaApi = require( './api/index' )
const app = express();

app.use(cors());
app.use( express.json() );

app.use( '/api' , rutaApi );

app.use( '/' , ( req ,res ) => {
    res.send({
        mensaje: 'Bienvenido a la API de prueba',
        vercion: "0.0.1",
        correciones: 0
    });
});

module.exports = app;