// dependencies
var express = require('express')
var passport   = require('passport')
var session = require('express-session')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')

// setting up the express app
var app = express()
var port = process.env.PORT || 3000

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
app.set('views', './views')
app.engine('handlebars', exphbs({ extname: '.hbs' }))
app.set('view engine', '.hbs')

// routes
 var routes = require('./controllers/authcontroller.js') 
 app.get('/', function(req, res){
     res.send("Welcome to Passport With Sequelize")
 })


var authRoute = require('./routes/auth.js')(app);
require('./config/passport/passport.js')(passport, models.user);

//syncing our sequelize models and then starting the express app
db.sequelize.sync({}).then(function() {
    app.listen(port, function() {
        console.log('app listening on port: ' + port)
    })
})