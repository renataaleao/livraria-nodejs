const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const Seguranca = require('../services/segurancaService');

router.post('/', async (req, res) => {
  let usuario = await Usuario.findOne({email: req.body.email});

  try {
    await Seguranca.validaLogin(usuario, req.body.senha);

    let token = Seguranca.criaToken(usuario);
    res.status(200).json({ auth: true, token, role: usuario.role, usuario: {nome: usuario.nome, email: usuario.email} });
  } catch (erro) {
    res.status(401).send({ auth: false, erro });
  }
});

router.delete('/', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;