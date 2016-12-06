'use strict';

(function () {
  angular.module('app').directive('facebookImage', function () {
    return {
      restrict: 'E',
      scope: {
        userId: '@userId',
        height: '@height'
      },
      controller: 'MyCtrl',
      templateUrl: '/public/app/views/directives/facebook-image.html'
    };
  });
})();