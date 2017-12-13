// dependencies
var express = require('express')
var router = express.Router()

// import models
var db = require('../models')

// redirect to landing page
router.get('/', function(req, res) {
    res.redirect('/index')
})

// gets all customers from table and prints to screen
router.get('/vendor', function(req, res) {
    db.Customer.findAll({}).then(function(data){
        var hbsObject = {
            customers: data
        }
    res.render('./vendor', hbsObject)
    })
})

// when you click on a specific customer, print that specific customer to the screen
router.get('/api/vendor/:id', function(req, res) {
    var id = req.params.id

    db.Customer.findOne({
        where: {
            id: id
        }
        }).then(function(dbVendor) {
        res.json(dbVendor)
    })
})

router.get('/vendor/back', function(req, res) {
    res.redirect('/vendor')
})

module.exports = router