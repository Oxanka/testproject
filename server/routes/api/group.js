var express = require('express');
var router = express.Router();
var groupCtrl = require('../../controllers/GroupController');
router
    .post('/addparticipantingroup', groupCtrl.addParticipantInGroup)
    .post('/create', groupCtrl.createGroup)
    .get('/get', groupCtrl.getGroups)
    .get('/getone', groupCtrl.getOneGroup)
    .delete('/remove', groupCtrl.deleteGroup)
    .post('/deleteparticipantingroup', groupCtrl.deleteParticipantInGroup)
    // .post('/update', groupCtrl.editGroup)
    .put('/update', groupCtrl.editGroup)
    .get('/getparticipantingroup', groupCtrl.getParticipantInGroup);


module.exports = router;