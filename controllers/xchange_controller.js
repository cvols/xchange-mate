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

module.exports = router