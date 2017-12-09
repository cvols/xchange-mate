// dependencies
var express = require('express')
var methodOverride = require('method-override')
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()



// setting up the express app
var app = express()
var port = process.env.PORT || 3030

// requiring models folder for syncing
var db = require('./models')

// static directory
app.use(express.static('public'))

// setting up express app to handle data parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(session({ secret: 'keyboard dog', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// setting up methodOverride
app.use(methodOverride('_method'))

// setting up express handlebars
var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes
var routes = require('./controllers/xchange_controller.js') 
app.use('/', routes)

app.get('/', function(req,res){
    res.send()
})

// var authRoute = require('./routes/auth.js')(app)
// require('./config/passport/passport.js')(passport, db.customer);

//syncing our sequelize model s and then starting the express app
db.sequelize.sync({}).then(function() {
    app.listen(port, function() {
        console.log('app listening on port: ' + port)
    })
})