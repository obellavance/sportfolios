// const firebaseHelper = require('../helpers/firebase-helper.js');

// console.log('firebaseHelper', firebaseHelper);

angular.module('app')
  .controller('teamCtrl', (
    $scope, 
    $firebaseArray, 
    $firebaseObject, 
    $location,
    facebookService,
    firebaseService,
  ) => {
    firebaseService.getAll('Teams').then((result) => {
        console.log(facebookService.getUserById('10154774973002244'));
        $scope.teams = result;
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });;
    
    $scope.createTeam = (name) => {
      const obj = {
        name: name,
        players: [firebase.auth().currentUser.providerData[0].uid]
      }
      firebaseService.createObject('Teams', obj);
    };
    
    $scope.goToCreateTeam = () => {
      $location.path('/create-team');
    };
  })