const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  ano_lancamento: {
    type: Number,
  },
  editora: {
    type: String,
  },
  edicao: {
    type: Number,
  },
  capa_url: {
    type: String,
  },
});

module.exports = mongoose.model('Livro', livroSchema);
