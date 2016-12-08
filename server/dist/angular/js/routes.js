'use strict';

angular.module('app').config(function ($routeProvider) {
  console.log('configurating routes...');
  $routeProvider.when('/', {
    templateUrl: '/app/views/partials/profile.html'
  }).when('/create-team', {
    templateUrl: '/app/views/partials/create-team.html'
  }).when('/profile', {
    templateUrl: '/app/views/partials/profile.html'
  }).when('/results', {
    templateUrl: '/app/views/partials/results.html'
  }).when('/team', {
    templateUrl: '/app/views/partials/team.html'
  }).otherwise({
    redirectTo: '/app/views/partials/profile.html'
  });
});