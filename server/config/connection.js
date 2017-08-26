
var Sequelize = require('sequelize');
var path = require("path");
var fs = require("fs");


var env = process.env.NODE_ENV || "dev";
var config = require(path.join(__dirname, 'config.json'))[env];

var dbUrl = process.env.DATABASE_URL || config.db.dbUrl;
var sequelize = new Sequelize(dbUrl,  {dialectOptions: {password: config.db.password}});
// var sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;