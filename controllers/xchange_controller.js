// dependencies
var express = require('express')
var router = express.Router()

// import data models
var db = require('../models')

// redirect to landing page
router.get('/', function(req, res) {
    res.redirect('/index')
})

router.get('/index', function(req, res) {
    db.Customer.findAll({}).then(function(data){
        var hbsObject = {
            customers: data
        }
    res.render('./index', hbsObject)
    })
})

module.exports = router