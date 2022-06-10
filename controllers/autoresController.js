const Autor = require("../models/Autor.js");
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json(await Autor.find());
});

router.get('/:id', async (req, res) => {
  res.json(await Autor.findById(req.params.id));
});

router.post('/', async (req, res) => {
  res.json(await new Autor(req.body).save());
});

router.put('/:id', async (req, res) => {
  res.json(await Autor.findByIdAndUpdate(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
  res.json(await Autor.findByIdAndRemove(req.params.id));
});

module.exports = router;