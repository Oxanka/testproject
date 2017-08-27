'use strict';

angular.module('myApp.participant', ['ngRoute'])

    .controller('ParticipantCtrl', function ($scope, $rootScope, $location, Participant, userinfo) {

        Participant.getParticipants();
        $rootScope.$on("all_users", function (e, data) {
            $scope.users = data;
            console.log($scope.users);
        });

        $scope.newUser = {
            name: "",
            surname: "",
            email: "",
            phone: ""
        };

        $scope.save = function () {
            console.log($scope.newUser);
            Participant.createUser($scope.newUser);
        };

        $scope.openUserInfo = function (userInfo) {
            $location.path('/users/' + userInfo.id);
        }
$scope.delete = function (user) {
    Participant.deleteUser(user.id)
}
    });