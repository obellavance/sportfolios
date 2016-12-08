'use strict';

angular.module('app').directive('facebookLoginButton', function () {
  return {
    restrict: 'E',
    controller: 'MyCtrl',
    templateUrl: '/app/views/directives/facebook-login-button.html'
  };
});