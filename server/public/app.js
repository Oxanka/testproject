'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.config',
    'myApp.services',
    'myApp.participant',
    'myApp.groups',
    'myApp.oneuser',
    'myApp.onegroup'

])
    .config(function ($locationProvider, $routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $routeProvider.when('/users',
            {
                templateUrl: 'participant/participant.html',
                controller: 'ParticipantCtrl'
            });
        $routeProvider.when('/groups',
            {
                templateUrl: 'groups/groups.html',
                controller: 'GroupsCtrl'
            });
        $routeProvider.when('/users/:id',
            {
                templateUrl: 'oneUser/oneUser.html',
                controller: 'OneUserCtrl',
                resolve:{
                    id: function($route){ return $route.current.params.id }
                }
            });
        $routeProvider.when('/groups/:id',
            {
                templateUrl: 'oneGroup/oneGroup.html',
                controller: 'OneGroupCtrl',
                resolve:{
                    id: function($route){ return $route.current.params.id }
                }
            });

        $locationProvider.hashPrefix('!');
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        $routeProvider.otherwise({redirectTo: '/users'});

    })
    .run(function ($rootScope, $location) {
    })
