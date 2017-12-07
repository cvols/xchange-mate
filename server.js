// dependencies
var express = require('express')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')

// setting up the express app
var app = express()
var port = process.env.port || 3000

// requiring models folder for syncing
var db = require('./models')

// static directory
app.use(express.static('public'))

// setting up express app to handle data parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// setting up methodOverride
app.use(methodOverride('_method'))

// setting up express handlebars
var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes
var routes = require('./controllers/burger_controller.js') 
app.use('/', routes)

//syncing our sequelize models and then starting the express app
db.sequelize.sync({}).then(function() {
    app.listen(port, function() {
        console.log('app listening on port: ' + port)
    })
})