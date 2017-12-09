// dependencies
var express = require('express')
var router = express.Router()

// import models
var db = require('../models/reciever.js')

// redirect to landing page
router.get('/', function(req, res) {
    res.redirect('/index')
})

router.get('/index', function(req, res) {
    res.render('./index');
})

router.get('/vendor', function(req, res) {
    db.Customer.findAll({}).then(function(data){
        var hbsObject = {
            customers: data
        }
    res.render('./vendor', hbsObject)
    })
})

router.get('/vendor/:id', function(req, res) {
    var id = req.params.id

    db.Customer.findOne({
        where: {
            id: id
        }
    }).then(function(dbCustomer) {
        res.json(dbCustomer)
    })
})

module.exports = router