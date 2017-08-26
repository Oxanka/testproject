"use strict";
var Sequelize = require('sequelize'),
    sequelize = require('../config/connection');

var Participant = sequelize.define('participant', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    active: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
},{
    tableName: 'participant',
    timestamps: false

});

module.exports = Participant;