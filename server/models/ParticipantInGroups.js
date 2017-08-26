"use strict";
var Sequelize = require('sequelize'),
    sequelize = require('../config/connection');

var ParticipantInGroup = sequelize.define('participantingroup', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ifParticipant: Sequelize.INTEGER,
    idGroup: Sequelize.INTEGER,
    active: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
},{
    tableName: 'participantingroup',
    timestamps: false

});

module.exports = ParticipantInGroup;