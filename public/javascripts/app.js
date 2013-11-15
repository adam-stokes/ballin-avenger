'use strict';

var cbc = angular.module('cbc', [
    'ngRoute',
    'cbcControllers'
]);

cbc.config(
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');
        $routeProvider.
        when('/', {
            templateUrl: 'partials/index',
            controller: 'IndexCtrl'
        }).
        when('/activity', {
	    redirectTo: '/'
        }).

        when('/discuss', {
            templateUrl: 'partials/discuss',
            controller: 'DiscussCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
);
