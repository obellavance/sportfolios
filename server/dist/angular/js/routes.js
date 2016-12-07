'use strict';

angular.module('app').config(function ($routeProvider) {
  console.log('configurating routes...');
  $routeProvider.when('/', {
    templateUrl: '/app/views/partials/profile.html'
  }).when('/profile', {
    templateUrl: '/app/views/partials/profile.html'
  }).otherwise({
    redirectTo: '/app/views/partials/profile.html'
  });
});