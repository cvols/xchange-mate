// dependencies
var express = require('express');
var router = express.Router();

// import models
var db = require('../models');

// redirect to landing page
router.get('/', function (req, res) {
    res.redirect('/index')
})

router.get('/vendor', function (req, res) {
    db.Customer.findAll({}).then(function (data) {
        var hbsObject = {
            customers: data
        }
        res.render('./vendor', hbsObject)
    })
})

router.get('/reciever', function (req, res) {
    db.Customer.findAll({}).then(function (data) {
        var hbsObject = {
            customers: data
        }
        //this renders data to the view
        res.render('./reciever', hbsObject)
    })
})

//figure out a way to update the transaction table
//figure out how to associate that transaction with a specific customer
router.post('/reciever', function (req, res) {
    console.log(req.body);
    res.json("hi");
    db.Transaction.update(req.body,
        {
          where: {
            id: 1
          }
        })
      .then(function(dbTransaction) {
          console.log(dbTransaction);
        // res.json(dbTransaction);
      });

   
    //you are adding the id from the customer table to the transaction table so that you can associate them
    //db.Transaction: add method customer id = however you get customer id
    //sequelize code how to add information to database
    //depending on authentication will determine how I will get access to user id
    //if you are using passport req.user
})



router.get('/vendor/:id', function (req, res) {
    var id = req.params.id

   db.Customer.findOne({
        where: {
            id: id
        }
    }).then(function (dbCustomer) {
        res.json(dbCustomer)
    })
})

router.get('/receiver/:id', function (req, res) {
    var id = req.params.id

    db.receiver.findOne({
        where: {
            id: 1
        }
    }).then(function (dbCustomer) {
        res.json(dbCustomer)
    })
})

module.exports = router