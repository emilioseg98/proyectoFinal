const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//Settings
app.use(bodyParser.json())
app.use(cors())

const {db} = require('./db')

//Routes
app.post('/api/users', (req, res) => {
    let data = req.body
    db.addUser(res, data)
})

app.post('/api/login', (req, res) => {
    let data = req.body
    db.login(res, data)
})

app.put('/api/users/', (req, res) => {
    let {id} = req.params
    let data = req.body
    db.updateUser(res, id, data)
})

app.get('/api/users/:id', (req, res) => {
    let {id} = req.params
    db.getUser(res, id)
})

app.delete('/api/users/:id', (req, res) => {
    let {id} = req.params
    db.deleteUser(res, id)
})

//Productos Routes
app.post('/api/prod/:userId', (req, res) => {
    let data = req.body
    let {userId} = req.params
    data.id_user = userId
    db.addNote(res, data)
})

app.get('/api/prod/:userId', (req, res) => {
    let {userId} = req.params
    db.getProd(res, userId)
})

app.put('/api/prod/:id', (req, res) => {
    let {id} = req.params
    let data = req.body
    db.updateProd(res, id, data)
})

app.delete('/api/prod/:id', (req, res) => {
    let {id} = req.params
    db.deleteProd(res, id)
})

//Reportes Routes
app.post('/api/repo/:userId', (req, res) => {
    let data = req.body
    let {userId} = req.params
    data.id_user = userId
    db.addRepo(res, data)
})

exports.app = app