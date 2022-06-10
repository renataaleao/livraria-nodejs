const Livro = require("../models/Livro.js");
const express = require('express');
const router = express.Router();
const Seguranca = require('../services/segurancaService');

router.get('/', async (req, res) => {
    res.json(await Livro.find());
})

router.get('/:id', async (req, res) => {
    res.json(await Livro.findById(req.params.id));
});
  
router.post('/', Seguranca.isAutenticado, Seguranca.hasRole('administrador'), async (req, res) => {
    res.json(await new Livro(req.body).save());
});
  
router.put('/:id', Seguranca.isAutenticado, Seguranca.hasRole('administrador'), async (req, res) => {
    res.json(await Livro.findByIdAndUpdate(req.params.id, req.body));
});
  
router.delete('/:id', Seguranca.isAutenticado, Seguranca.hasRole('administrador'), async (req, res) => {
    res.json(await Livro.findByIdAndRemove(req.params.id));
});
  
module.exports = router;