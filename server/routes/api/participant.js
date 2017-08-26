var express = require('express');
var router = express.Router();
var participantCtrl = require('../../controllers/ParticipantController');

router
    .post('/createparticipant', participantCtrl.createParticipant)
    .delete('/deleteparticipant', participantCtrl.deleteParticipant)
    .put('/updateparticipant', participantCtrl.editParticipant)
    .get('/getoneparticipant', participantCtrl.getOneParticipant)
    .get('/get', participantCtrl.getParticipant);

module.exports = router;