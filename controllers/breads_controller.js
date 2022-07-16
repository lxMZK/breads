const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/:arrayIndex', function(req,res){
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads