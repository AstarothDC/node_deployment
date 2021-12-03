const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Producto', ProductoSchema);