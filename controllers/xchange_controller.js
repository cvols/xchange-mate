// dependencies
var express = require('express')
var router = express.Router()

// import models
var db = require('../models')

// redirect to landing page
router.get('/', function(req, res) {
    res.redirect('/index')
})

router.get('/vendor', function(req, res) {
    db.Customer.findAll({}).then(function(data){
        var hbsObject = {
            customers: data
        }
    res.render('./vendor', hbsObject)
    })
})

router.get('/reciever', function(req, res) {
    db.Customer.findAll({}).then(function(data){
        var hbsObject = {
            customers: data
        }
    res.render('./reciever', hbsObject)
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

router.get('/receiver/:id', function(req, res) {
    var id = req.params.id

    db.receiver.findOne({
        where: {
            id: id
        }
    }).then(function(dbCustomer) {
        res.json(dbCustomer)
    })
})

module.exports = router