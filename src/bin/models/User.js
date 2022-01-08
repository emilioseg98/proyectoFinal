const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String
})

var User = mongoose.model('User', userSchema)

module.exports = User