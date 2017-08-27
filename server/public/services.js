angular.module('myApp.services', [])

    .service('Participant', function ($http, $rootScope, API, userinfo) {
        var getParticipants = function () {
            return $http({
                method: "get",
                url: API + "/user/get"
            }).then(function (users) {
                console.log(users);
                $rootScope.$emit("all_users", users.data);

            })
        };

        var getOneParticipant = function (id) {
            var data = {
                idParticipant: id
            }
            return $http({
                method: "get",
                url: API + "/user/getoneparticipant",
                params: data
            }).then(function (user) {
                console.log(user);
                $rootScope.$emit("one_user", user.data);
                userinfo.userinfo = user.data;
            })
        };
        var createUser = function (user) {
            return $http({
                method: "post",
                url: API + "/user/createparticipant",
                data: user
            }).then(function (created) {
                console.log(created);
                getParticipants();
            })
        };
        var updateUser = function (user) {
            return $http({
                method: "put",
                url: API + "/user/updateparticipant",
                data: user
            }).then(function (created) {
                console.log(created);
            })
        };
        var deleteUser = function (id) {
            var data = {
                idParticipant: id
            }
            return $http({
                method: "delete",
                url: API + "/user/deleteparticipant",
                params: data
            }).then(function (created) {
                console.log(created);
                getParticipants();
            })
        };

        return {
            getParticipants: getParticipants,
            createUser: createUser,
            getOneParticipant: getOneParticipant,
            updateUser: updateUser,
            deleteUser: deleteUser

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
    })
    .service('userinfo', function () {
        var userinfo = [];
         return userinfo;
    })

;
