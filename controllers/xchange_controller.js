// dependencies
var express = require('express');
var router = express.Router();

// import models
var db = require('../models');

// redirect to landing page
router.get('/', function(req, res) {
    res.redirect('/index')
})


router.get('/index', function(req, res) {
    res.render('./index');
})

router.post('/api/newCustomer', function (req, res) {
    console.log("hello");
    console.log(req.body.first_name);
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
    }).then(function (xchange_mate) {
        res.json(xchange_mate)
    })
})

router.post('/api/newVendor', function (req, res) {
    console.log("hello");
    console.log(req.body.first_name);
    db.Vendor.create({
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
    }).then(function (xchange_mate) {
        res.json(xchange_mate)
    })
})





// gets all customers from table and prints to screen
router.get('/vendor', function(req, res) {
    db.Customer.findAll({
        include: [db.Transaction]        
    }).then(function(data){
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

router.get('/reciever', function (req, res) {
    db.Customer.findAll({}).then(function (data) {
        var hbsObject = {
            customers: data
        }
        res.render('./reciever', hbsObject)
    })
})

router.post('/reciever', function (req, res) {
    console.log(req.body);
    res.json("hi");
    db.Transaction.create(req.body)
      .then(function(dbTransaction) {
          console.log(dbTransaction);
      });
})

router.get('/receiver/:id', function (req, res) {
    var id = req.params.id

    db.receiver.findOne({
        where: {
            id: 1
        }
    }).then(function (dbCustomer) {
        res.json(dbCustomer)
        }).then(function(dbVendor) {
        res.json(dbVendor)
    })
})

router.get('/vendor/back', function(req, res) {
    res.redirect('/vendor')
})

router.get('/admin/', function(req, res) {
    db.Transaction.findAll({
        include: [db.Customer]
    })
    .then(function(data) {
        var hbsObject = {
            transaction: data
        }
        res.render('./admin', hbsObject)
        console.log(hbsObject);
    })
})

module.exports = router