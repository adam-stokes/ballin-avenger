'use strict';

var cbc = angular.module('cbc', [
    'ngRoute',
    'cbcControllers'
]);

cbc.config(
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
    $routeProvider.
    when('/', {
        templateUrl: 'partials/index',
        controller: 'IndexCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
});
