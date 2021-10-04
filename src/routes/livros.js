const express = require('express');
const router = express.Router();
const Livro = require('../models/livro');

// pegar tudo
router.get('/', async (req, res) => {
  try {
    const livros = await Livro.find();
    res.json(livros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// pegar um
router.get('/:id', async (req, res) => {
  try {
    const livroEncontrado = await Livro.findById(req.params.id);
    res.json(livroEncontrado);
  } catch (e) {
    res.status(500).json({ message: err.message });
  }
});

// criar um
router.post('/', async (req, res) => {
  const livro = new Livro({ ...req.body });

  try {
    const novoLivro = await livro.save();
    res.status(201).json(novoLivro);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// atualizar um
router.patch('/:id', (req, res) => {
  Livro.updateOne({ _id: req.params.id }, req.body, (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json(result);
    }
  });
});

// excluir um
router.delete('/:id', (req, res) => {
  Livro.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
