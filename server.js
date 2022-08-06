const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

const bakersController = require('./controllers/bakers_controller')
app.use('/bakers', bakersController)

app.get('/', function (req, res) {
    res.send('Welcome to an Awesome App about Breads!')
})

app.get('*', function (req, res) {
    res.send('404')
})

app.listen(PORT, function () {
    console.log('listening on port', PORT)
})