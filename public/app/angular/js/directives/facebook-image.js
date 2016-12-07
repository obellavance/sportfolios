angular
  .module('app')
  .directive('facebookImage', () => {
    return {
      restrict: 'E',
      scope: {
        userId: '@userId',
        height: '@height'
      },
      controller: 'MyCtrl',
      templateUrl: '/app/views/directives/facebook-image.html'
    }
  });