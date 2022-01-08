const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productoSchema = new Schema({
    nombreProducto: String,
    tipoProducto: String,
    plataforma: String,
    fechaInicio: String,
    precio: int,
    id_user: {
        ref: 'User',
        type: Schema.Types.ObjectId
    }
})

var Producto = mongoose.model('Producto', productoSchema)

module.exports = Producto