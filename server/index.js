const express = require('express')
const massive = require('massive')
const products_controller =require('./products_controller')
// const {create} = require('./products_controller')
// const {getOne} = require('./products_controller')
// const{getAll} = require('./products_controller')
// const{update} = require("./products_controller")
// const{delete_} = require("./products_controller")
require('dotenv').config();

const app = express()

const {SERVER_PORT, CONNECTION_STRING}=process.env

massive(CONNECTION_STRING)
.then(dbInstance =>{
    app.set('db',dbInstance)
    console.log('Database Connected')
})
.catch(err =>console.log(err))
app.use(express.json())

app.post('/api/products',products_controller.create)
app.get('/api/products',products_controller.getAll)
app.get('/api/products/:id',products_controller.getOne)
app.put('/api/products/:id',products_controller.update)
app.delete('/api/products/:id',products_controller.delete)




app.listen(SERVER_PORT,()=>console.log(`server listening on port ${SERVER_PORT}.`))
