// dependencies
var express = require('express')
var passport = require("./config/passport");
var passportV = require("./config/vendorPassport");
var flash = require('connect-flash')
var session = require('express-session')
var bodyParser = require('body-parser')

// setting up the express app
var app = express()
var port = process.env.PORT || 3030

// requiring models folder for syncing
var db = require('./models')

// Connect Flash
app.use(flash())

// // Passport Init
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize())
app.use(passport.session())
app.use(passportV.initialize())
app.use(passportV.session())


// static directory
//app.use(express.static('public'))
var path = require('path');
app.use(express.static(path.join(__dirname + '/public/')));

// setting up express app to handle data parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// setting up express handlebars
var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes
require('./controllers/xchange_controller.js')(app)

//syncing our sequelize models and then starting the express app
db.sequelize.sync({}).then(function () {
    app.listen(port, function () {
        console.log('app listening on port: ' + port)
    })
})