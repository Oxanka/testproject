'use strict';

angular.module('myApp.participant', ['ngRoute'])

    .controller('ParticipantCtrl', function ($scope, $rootScope, $location, Participant) {

        Participant.getParticipants();


        $scope.newUser = {
            name: "",
            surname: "",
            email: "",
            phone: ""
        }

        $scope.save = function(){
            console.log($scope.newUser);
            Participant.createUser($scope.newUser);
        }
    });