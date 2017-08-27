'use strict';

angular.module('myApp.oneuser', ['ngRoute'])

    .controller('OneUserCtrl', function($scope, $rootScope,$location, $route, Participant, userinfo) {

        var user = $route.current.params.id;
        console.log(user);
        Participant.getOneParticipant(user);
        $rootScope.$on("one_user", function (e, data) {
            $scope.user = data;
        });

        $scope.updateInfo = function () {
            Participant.updateUser($scope.user);
            $location.path('/users');
        };

        $scope.back = function () {
            $location.path('/users');
        }
    });