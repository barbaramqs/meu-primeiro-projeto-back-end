const mongoose = require('mongoose')

const MulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true,
    },
    citacao: {
        type: String,
        required: true,
    },
    minibio: {
        type: String,
        riquered: true
    }
})

module.exports = mongoose.model('diva', MulherSchema)