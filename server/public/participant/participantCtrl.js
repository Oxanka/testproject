'use strict';

angular.module('myApp.participant', ['ngRoute'])

    .controller('ParticipantCtrl', function ($scope, $rootScope, $location, Participant) {

        Participant.getParticipants();

        $scope.openModal = function () {
            // $('body');
            // $('#myModal').modal(options)
            // $("#myModal").modal('show');
        }
    });