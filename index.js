const app = require('./src/app')
require('dotenv').config()

const PORT = process.env.PORT

app.listen( PORT , (req,res) =>{
    console.log('-------------------------------------');
    console.log(`app lista en el puerto ${PORT}`)
    console.log('-------------------------------------');
    console.log('lista la API para usarse :)')
    console.log('-------------------------------------');
})