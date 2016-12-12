angular.module('app')
  .config(($routeProvider) => {
      console.log('configurating routes...');
    $routeProvider
      .when('/', {
        templateUrl: '/app/views/partials/profile.html',
      })
      .when('/association', {
        templateUrl: '/app/views/partials/association.html',
        controller: 'associationCtrl'
      })
      .when('/create-association', {
        templateUrl: '/app/views/partials/create-association.html',
        controller: 'associationCtrl'
      })
      .when('/create-team', {
        templateUrl: '/app/views/partials/create-team.html',
        controller: 'teamCtrl'
      })
      .when('/profile', {
        templateUrl: '/app/views/partials/profile.html',
      })
      .when('/results', {
        templateUrl: '/app/views/partials/results.html',
      })
      .when('/team', {
        templateUrl: '/app/views/partials/team.html',
        controller: 'teamCtrl'
      })
      .otherwise({
        redirectTo: '/app/views/partials/profile.html',
      });
  })