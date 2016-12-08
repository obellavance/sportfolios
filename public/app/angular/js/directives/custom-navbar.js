angular
  .module('app')
  .directive('customNavbar', () => {
    return {
      restrict: 'E',
      controller: 'MyCtrl',
      templateUrl: '/app/views/directives/custom-navbar.html'
    }
  });