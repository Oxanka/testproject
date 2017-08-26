"use strict";
var Sequelize = require('sequelize'),
    sequelize = require('../config/connection');

var Group = sequelize.define('group', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    shortInformation: Sequelize.STRING,
    moreInformation: Sequelize.TEXT
},{
    tableName: 'group',
    timestamps: false

});

module.exports = Group;