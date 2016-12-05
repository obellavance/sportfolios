(function() {
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
        templateUrl: '/public/app/views/directives/facebook-image.html'
      }
    });
}());