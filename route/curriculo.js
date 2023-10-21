const express = require('express');
const Curriculo = require('../models/Curriculo');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const curriculo = await Curriculo.create(req.body);
    res.json(curriculo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar currículo' });
  }
});

module.exports = router;
