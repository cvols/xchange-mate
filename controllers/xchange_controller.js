// dependencies
var express = require('express')
var router = express.Router()

// import data models
var db = require('../models')

// redirect to landing page
router.get('/', function(req, res) {
    res.redirect('/index')
})

module.exports = router