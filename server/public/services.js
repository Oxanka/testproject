angular.module('myApp.services', [])

    .service('Participant', function ($http, $rootScope, API) {
        var getParticipants = function () {
            return $http({
                method: "get",
                url: API + "/user/get"
            }).then(function (users) {
                console.log(users);

            })
        };

        var createUser = function (user) {

        }

        return {
            getParticipants: getParticipants,
            createUser: createUser
        };
    })

    .service('Group', function ($http, $rootScope, API) {

        var getGroups = function () {
            return $http({
                method: "get",
                url: API + "/group/get"
            }).then(function (groups) {
                console.log(groups);

            })
        };

        var createGroups = function () {
            var data = {

            };
            return $http({
                method: "post",
                url: API + "/group/create",
                data: data
            }).then(function (created) {
                console.log(created);

            })
        };
        
        return {
            getGroups: getGroups,
            createGroups: createGroups
        };
    });
