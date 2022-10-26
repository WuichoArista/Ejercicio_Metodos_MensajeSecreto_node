const jwt = require( 'jsonwebtoken' );
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;


const authMiddleware = ( req , res , next)  => {
    const {autorizacion} = req.headers;
    if(!autorizacion){
        res.status(404).send({
            auth: 'Denegada',
            mensaje:'autorizacion Denegada'
        });
    }else{
        const token = autorizacion.split(' ')[1]
        try {
            const decodificar = jwt.verify( token , JWT_SECRET );
            req.usuario = decodificar.data.usuario;
            req.permisos = decodificar.data.permiso
            const url = req.url.replace(/\//g, ':').slice(1);
            if(req.permisos.indexOf(url) === -1){
                return res.status(403).send({
                    error: 'no tienes autorizacion'
                })
            }
            next()
           
        } catch (error) {
            return res.send({
                error: `Este es el error => ${error.message}`
            });
        };
    };
};

module.exports = authMiddleware;