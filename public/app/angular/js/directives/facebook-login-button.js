angular
  .module('app')
  .directive('facebookLoginButton', () => {
    return {
      restrict: 'E',
      controller: 'MyCtrl',
      templateUrl: '/app/views/directives/facebook-login-button.html'
    }
  });