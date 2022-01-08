const mongoose = require('mongoose')

const MONGO_URI = 'mongodb://localhost:27017/notes-app'

//Models
const User = require('./models/User')
const Producto = require('./models/Producto')
const Reporte = require('./models/Reportes')

class Controller{
    constructor(){
        this.connect()
    }
    async connect(){
        try{
            await mongoose.connect(MONGO_URI, {
                useNewUrlParser: true
            })
            console.info('Connected to DB')
        }catch(err){
            console.error(err)
        }
    }

    //Queries
    addUser(res, data){
        User.create(data, (err, newUser) => {
            if(err) throw err
            res.json({
                status: 200,
                message: 'Created',
                user: newUser
            })
        })
    }

    login(res, data){
        User.findOne({
            $and: [
                {email: data.email},
                {password: data.password}
            ]
        }, (err, user) => {
            if(err) throw err
            res.json({
                status: 200,
                message: 'Ok',
                user
            })
        })
    }

    updateUser(res, id, data){
        User.updateOne({
            _id: id
        }, data, (err, updateUser) => {
            if(err) throw err
            res.json({
                status: 200,
                message: 'Updated',
                user: updateUser
            })
        })
    }

    getUser(res, id){
        User.findOne({
            _id: id
        }, (err, user) => {
            if(err) throw err
            res.json({
                status: 200,
                message: 'Ok',
                user
            })
        })
    }

    deleteUser(res, id){
        User.deleteOne({
            _id: id
        }, (err) => {
            if(err) throw err
            res.json({
                status: 200,
                message: 'Deleted'
            })
        })
    }

    //Productos Queries
    addNote(res, data){
        Producto.create(data, (err, newProducto) => {
            if(err) throw err
            res.json({
                status: 200,
                message: 'Created',
                newProducto
            })
        })
    }

    getProd(res, userId){
        Producto.find({
            id_user: userId
        }, (err, prod) => {
            if(err) throw err
            res.json({
                status: 200,
                message: 'Ok',
                prod
            })
        })
    }

    updateProd(res, id, data){
        Producto.updateOne({
            _id: id
        }, data, (err, updateProd) => {
            if(err) throw err
            res.json({
                status: 200,
                message: 'Updated',
                note: updateProd
            })
        })
    }

    deleteProd(res, id){
        Producto.deleteOne({
            _id: id
        }, (err) => {
            if(err) throw err
            res.json({
                status: 200,
                message: 'Deleted'
            })
        })
    }

    //Reportes Queries
    addRepo(res, data){
        Reporte.create(data, (err, newRepo) => {
            if(err) throw err
            res.json({
                status: 200,
                message: 'Created',
                newRepo
            })
        })
    }
}

exports.db = new Controller()