const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema(
    {
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
)

module.exports = mongoose.model('livros', livroSchema)