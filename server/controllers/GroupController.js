"use strict";
var Promise = require("bluebird");
var geo = require('geolib');
var Group = require('../models/Group');
var ParticipantInGroup = require('../models/ParticipantInGroups');
var Participant = require('../models/Participant')

var md5 = require('js-md5');
var FormData = require('form-data');
var unixTime = require('unix-time');

function createGroup(req, res, next) {

    var group = req.body.groupInfo;

    Group.create({
        name: group.name,
        shortInformation: group.shortInformation,
        moreInformation: group.shortInformation,
        active: 1
    })
        .then(function (group) {
            return res.status(200).json('group created');
            // gerParticipant(req, res, next)
        }, function (err) {
            console.log(err); // Error: "Ошибка!"
            return res.status(500).json("Error" + err);
        });

}
function getGroups(req, res, next) {
    Group.findAll({
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
function getOneGroup(req, res, next) {
    var idGroup = req.body.idGroup;
    Group.findOne({
        where: {
            id: idGroup,
            active: 1
        }
    })
        .then(function (group) {
            return res.status(200).json(group);
        }, function (err) {
            console.log(err); // Error: "Ошибка!"
            return res.status(500).json("Error" + err);
        });
}

function editGroup(req, res, next) {
    var groupInfo = req.body.groupInfo;
    Group.update({
            name: groupInfo.name,
            shortInformation: groupInfo.shortInformation,
            moreInformation: groupInfo.shortInformation,
            active: 1
        },
        {
            where: {
                id: groupInfo.idGroup
            }
        }
    )
        .then(function (updateGroup) {
            return res.status(200).json("group update");
        }, function (err) {
            return res.status(500).json("Error" + err);
        });
}

function deleteGroup(req, res, next) {
    var idGroup = req.body.idGroup;
    Group.update({
            active: 0
        },
        {
            where: {
                id: idGroup
            }
        }
    )
        .then(function (deleteGroup) {
            return res.status(200).json("group delete");
        }, function (err) {
            return res.status(500).json("Error" + err);
        });
}

function addParticipantInGroup(req, res, next) {
    var idGroup = req.body.idGroup;
    var idParticipant = req.body.idParticipant;
    ParticipantInGroup.create({
        ifParticipant: idParticipant,
        idGroup: idGroup,
        active: 1
        }
    )
        .then(function (addParticipantInGroup) {
            return res.status(200).json("participant add in group");
        }, function (err) {
            return res.status(500).json("Error" + err);
        });
}

function deleteParticipantInGroup(req, res, next) {
    var idGroup = req.body.idGroup;
    var idParticipant = req.body.idParticipant;
    Group.update({
            active: 0
        },
        {
            where: {
                ifParticipant: idParticipant,
                idGroup: idGroup,
            }
        }
    )
        .then(function (deleteParticipantInGroup) {
            return res.status(200).json("participant delete in group");
        }, function (err) {
            return res.status(500).json("Error" + err);
        });
}

function getParticipantInGroup(req, res, next) {
    var idGroup = req.body.idGroup;
    Group.belongsTo(Participant, { foreignKey: 'ifParticipant'});
    var  querySettings = {
        include: [
            {
                model: Participant
            }
        ],
        where : {idGroup: idGroup}
    };
    Group.findAll(querySettings).then(function (info) {
        return res.status(200).json(info);
    }, function (err) {
        return res.status(500).json("Error" + err);
    })
}




module.exports.createGroup = createGroup;
module.exports.deleteGroup = deleteGroup;
module.exports.getGroups = getGroups;
module.exports.getOneGroup = getOneGroup;
module.exports.editGroup = editGroup;
module.exports.addParticipantInGroup = addParticipantInGroup;
module.exports.deleteParticipantInGroup = deleteParticipantInGroup;
module.exports.getParticipantInGroup = getParticipantInGroup;
