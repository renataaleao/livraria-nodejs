require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors =  require('cors');
const BootstrapService = require('./services/bootstrapService');

mongoose.connect(process.env.DATABASE_URL).then(() => {
  BootstrapService.boot();
});

const app = express();

app.use(cors());
app.use(bodyParser.json()); // 1. aceitar dados no formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // 2. aceitar dados no format url encoded

// Registrar os controllers
app.use('/login', require('./controllers/loginController'));
app.use('/usuarios', require('./controllers/usuarioController'));
app.use('/livros', require('./controllers/livrosController'));
app.use('/autores', require('./controllers/autoresController'));

app.listen(parseInt(process.env.SERVER_PORT), () => {
  console.log(`Servidor escutando em http://localhost:${process.env.SERVER_PORT}`)
})