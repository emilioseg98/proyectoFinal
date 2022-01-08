const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reporteSchema = new Schema({
    fechaInicial: String,
    fechaFinal: String,
    id_user: {
        ref: 'User',
        type: Schema.Types.ObjectId
    }
})

var Reporte = mongoose.model('Reporte', reporteSchema)

module.exports = Reporte