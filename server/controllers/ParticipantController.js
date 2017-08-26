"use strict";
var Promise = require("bluebird");
var geo = require('geolib');
var Participant = require('../models/Participant');

var md5 = require('js-md5');
var FormData = require('form-data');
var unixTime = require('unix-time');

function createParticipant(req, res, next) {

    var user = req.body;

    Participant.create({
        name: user.name,
        surname: user.surname,
        email: user.email,
        phone: user.phone,
        active: 1
    })
        .then(function (participant) {
            return res.status(200).json('participant created');
            // gerParticipant(req, res, next)
        }, function (err) {
            console.log(err); // Error: "Ошибка!"
            return res.status(500).json("Error" + err);
        });

}
function getParticipant(req, res, next) {
    Participant.findAll({
        where: {
            active: 1
        }
    })
        .then(function (participants) {
            return res.status(200).json(participants);
        }, function (err) {
            return res.status(500).json("Error" + err);
        });
}
function getOneParticipant(req, res, next) {
    var idParticipant = req.body.idParticipant;
    Participant.findOne({
        where: {
            id: idParticipant,
            active: 1
        }
    })
        .then(function (participant) {
            return res.status(200).json(participant);
        }, function (err) {
            console.log(err); // Error: "Ошибка!"
            return res.status(500).json("Error" + err);
        });
}

function editParticipant(req, res, next) {
    var userInfo = req.body.userInfo;
    Participant.update({
            name: userInfo.name,
            surname: userInfo.surname,
            email: userInfo.email,
            phone: userInfo.phone
        },
        {
            where: {
                id: userInfo.idParticipant
            }
        }
    )
        .then(function (updateUser) {
            return res.status(200).json("user delete");
        }, function (err) {
            return res.status(500).json("Error" + err);
        });
}

function deleteParticipant(req, res, next) {
    var idParticipant = req.body.idParticipant;
    Participant.update({
        active: 0
        },
        {
            where: {
                id: idParticipant
            }
        }
    )
        .then(function (deleteUser) {
            return res.status(200).json("user delete");
        }, function (err) {
            return res.status(500).json("Error" + err);
        });
}



module.exports.createParticipant = createParticipant;
module.exports.getParticipant = getParticipant;
module.exports.getOneParticipant = getOneParticipant;
module.exports.editParticipant = editParticipant;

module.exports.deleteParticipant = deleteParticipant;