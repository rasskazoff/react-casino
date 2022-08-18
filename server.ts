require('dotenv').config()
const express  = require('express')
const app      = express()
const mongoose = require('mongoose')
const path = require('path')
const db = 'mongodb://localhost:27017/casino'
  
app.use('/api', require('./routes/data.routes'))
//app.use('/slots', express.static(path.join(__dirname, 'slots' , 'build')))
//app.use('/slots/*', express.static(path.join(__dirname, 'slots' , 'build')))
//app.use('/fortune-wheel', express.static(path.join(__dirname, 'fortune-wheel' , 'build')))
//app.use('/fortune-wheel/*', express.static(path.join(__dirname, 'fortune-wheel' , 'build')))

mongoose
    .connect(db)
    .then((res) => console.log('Подключение к базе установлено'))
    .catch((error) => console.log(`Ошибка подключения к базе ${error}`))

//const bodyParser     = require('body-parser')
//const db_actions     = require('./db_actions')
//app.use(bodyParser.urlencoded({ extended: true }));
    
app.listen(process.env.PORT, ()=>(
    console.log(`Сервер работает  http://localhost:${process.env.PORT}`)
))          

