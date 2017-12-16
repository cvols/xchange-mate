// dependencies
var express = require('express');
var passport = require('passport')

// import models
var db = require('../models');
var passport = require("../config/passport");
var passportV = require("../config/vendorPassport")


module.exports = function (app) {
    // redirect to landing page
    app.get('/', function (req, res) {
        res.redirect('/index')
    })

    app.get('/index', function (req, res) {
        res.render('./index');
    })

    app.post('/custLogin',
        passport.authenticate('local', {
            successRedirect: '/reciever',
            failureFlash: true
        })
    );

    app.post('/vendLogin',
        passportV.authenticate('local', {
            successRedirect: '/vendor',
            failureFlash: true
        })
    );

    app.get('/reciever', function (req, res) {
        res.render('reciever')
    })

    app.get('/vendor', function (req, res) {
        res.render('vendor')
    })

    app.post('/newCustomer', function (req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            phone_number: req.body.phone_number,
            street_address: req.body.street_address,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            user_rating: null,
            bank: req.body.bank,
            transaction: req.body.transaction
        }).then(function () {
            res.redirect(307, '/custLogin');
        }).catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
    });

    app.post('/newVendor', function (req, res) {
        console.log(req.body);
        db.Vendor.create({
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            phone_number: req.body.phone_number,
            street_address: req.body.street_address,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            user_rating: null,
            bank: req.body.bank,
            transaction: req.body.transaction
        }).then(function () {
            res.redirect(307, '/vendLogin');
        }).catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
    });

    app.get('/admin/', function (req, res) {
        db.Transaction.findAll({
            include: [{ model: db.User }, { model: db.Vendor }]
        })
            .then(function (data) {
                var hbsObject = {
                    transaction: data
                }
                res.render('admin', hbsObject)
            })
    })

    // gets all user from table and prints to screen
    app.get('/vendor/', function (req, res) {
        db.Transaction.findAll({
            include: [{ model: db.User }, { model: db.Vendor }]
        }).then(function (data) {
            var hbsObject = {
                transactions: data
            }
            res.render('vendor', hbsObject)
        })
    })

    // when you click on a specific user, print that specific user to the screen
    app.get('/api/vendor/:id', function (req, res) {
        var id = req.params.id

        db.User.findOne({
            where: {
                id: id
            }
        }).then(function (dbVendor) {
            res.json(dbVendor)
        })
    })

    app.get('/vendor/back', function (req, res) {
        res.redirect('/vendor')
    })

    app.get('/reciever', function (req, res) {
        res.render('reciever')
    })
    
    app.post('/reciever', function (req, res) {
        db.Transaction.create({
            desired_currency: req.body.desired_currency,
            total_money: req.body.total_money,
            current_currency: req.body.current_currency,
            transaction_location: req.body.transaction_location,
            exchange_rate: req.body.exchange_rate,
            fees: req.body.fees,
            total_charges: req.body.total_charges,
            transaction_date: req.body.transaction_date,
            UserId: 1,
            VendorId: 1,
            transaction: false
        }).then(function (dbTransaction) {
            res.json(dbTransaction)
        })
    })
}