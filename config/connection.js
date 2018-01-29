var Sequelize = require('sequelize'), connection

if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL)
} else {
  connection = new Sequelize('xchange_mate', 'chris', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3030'
  })
}

module.exports = connection;
