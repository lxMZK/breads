const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/', function(req,res){
    res.render('index', 
    {
        breads: Bread
    })
})

breads.get('/:arrayIndex', function(req,res){
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
        })
    } else {
        res.render('404')
    }
})

module.exports = breads