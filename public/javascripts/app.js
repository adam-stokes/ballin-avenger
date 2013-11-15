'use strict';

var cbc = angular.module('cbc', [
    'ngRoute',
    'cbcControllers'
]);

cbc.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/index',
        controller: 'IndexCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);
