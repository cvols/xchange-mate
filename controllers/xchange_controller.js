// dependencies
var express = require('express')
var router = express.Router()

// import models
var db = require('../models')

// redirect to landing page
router.get('/', function(req, res) {
    res.redirect('/index')
})

router.get('/index', function(req, res) {
    res.render('./index');
})

router.post('/api/newCustomer', function(req, res) {
    
    console.log("hello");
    console.log(req.body);
    
    db.Customer.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone_number: req.body.phone_number,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code
                 
        
    }).then(function(results) {
        // `results` here would be the newly created chirp
        res.json({ first_name: result.first_name});
    });
    
});



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