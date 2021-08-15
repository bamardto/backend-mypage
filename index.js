const express = require('express');
const cors = require('cors');

require('dotenv').config();

const { connection } = require('./database/config');

//creando server
const app = express();

//cors
app.use(cors());

//middlewares
app.use(express.json());

//database
connection();

//rutas
app.use('/', require('./routes/contacto'));

app.listen( process.env.PORT, () => {
    console.log('Server running '+ process.env.PORT);
});