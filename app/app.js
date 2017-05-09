'use strict';

// Declare app level module which depends on views, and components
angular.module('temwifi', [
  'ngRoute',
  'temwifi.places',
  'temwifi.view2',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/list'});
}]);
