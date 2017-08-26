'use strict';

angular.module('myApp.participant', ['ngRoute'])

    .controller('ParticipantCtrl', function ($scope, $rootScope, $location, Participant) {

        Participant.getParticipants();
    });