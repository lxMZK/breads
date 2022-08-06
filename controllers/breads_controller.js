const express = require('express')
const breads = express.Router()
const db = require('../models')

breads.get('/', async function (req, res) {
  const foundBakers = await db.Baker.find().lean()
  const foundBreads = await db.Bread.find().lean()
  res.render('index', {
    breads: foundBreads,
    bakers: foundBakers,
    title: 'Index Page'
  })
})


breads.post('/', function (req, res) {
  console.log(req.body)
  if (req.body.hasGluten) {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  db.Bread.create(req.body)
    .then(() => {
      res.redirect('/breads')
    })
})

breads.get('/new', function (req, res) {
  db.Baker.find().then(foundBakers => {
    res.render('new', { bakers: foundBakers })
  })
})

breads.get('/:id', (req, res) => {
  db.Bread.findById(req.params.id)
    .populate('baker')
    .then(foundBread => {
      const bakedBy = foundBread.getBakedBy()
      console.log(bakedBy)
      res.render('show', {
        bread: foundBread,
      })
    })
})

breads.get('/:id/edit', (req, res) => {
  db.Bread.findById(req.params.id)
    .then(foundBread => {
      db.Baker.find().then(foundBakers => {
        res.render('edit', {
          bread: foundBread,
          bakers: foundBakers
        })
      })
    })
})

breads.put('/:id', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  db.Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedBread => {
      console.log(updatedBread)
      res.redirect(`/breads/${req.params.id}`)
    })
})

breads.delete('/:id', function (req, res) {
  db.Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
      res.status(303).redirect('/breads')
    })
})

module.exports = breads