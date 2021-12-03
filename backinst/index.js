//importando variables de entorno loca//
require ('dotenv').config({path:'variables.env'});


const express = require('express');
//const conectarDB=
require('./config/db');
const cors = require('cors');


//Creamos el servidor
const app = express();

//Conectamos a la base de datos
//conectarDB();
app.use(cors());
app.use(express.json());
app.use('/productos', require('./routes/producto'))

//Definimos ruta principal
app.get('/', (req, res)=> {
    res.send('Hola Mundo');
})
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '4000';
app.listen(port,host, ()=> {
    console.log('El servidor está corriendo perfectamente');
})