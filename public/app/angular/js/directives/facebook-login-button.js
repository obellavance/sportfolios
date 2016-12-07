angular
  .module('app')
  .directive('facebookLoginButton', () => {
    return {
      restrict: 'E',
      scope: {
        isLoggedIn: '@isLoggedIn'
      },
      controller: 'MyCtrl',
      templateUrl: '/app/views/directives/facebook-login-button.html'
    }
  });