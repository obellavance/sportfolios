'use strict';

angular.module('app').directive('customNavbar', function () {
  return {
    restrict: 'E',
    controller: 'MyCtrl',
    templateUrl: '/app/views/directives/custom-navbar.html'
  };
});