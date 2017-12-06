// dependencies
var Sequelize = require('sequelize')

// creating mysql connection using Sequelize
var sequelize = new Sequelize('xchange_mate', 'chris', 'password', { // change user name and password, keep same database name
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
})

// heroku connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'chris', // change name
        password: 'password', // change password
        database: 'xchange_mate' // keep database
    })
}

module.exports = seqeulize