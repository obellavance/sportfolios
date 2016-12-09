'use strict';

// const firebaseHelper = require('../helpers/firebase-helper.js');

// console.log('firebaseHelper', firebaseHelper);

angular.module('app').controller('teamCtrl', function ($scope, $firebaseArray, $firebaseObject, $location, facebookService, firebaseService) {
  firebaseService.getAll('Teams').then(function (result) {
    console.log(facebookService.getUserById('10154774973002244'));
    $scope.teams = result;
  }).catch(function (error) {
    console.error('Error: ' + error.message);
  });;

  $scope.createTeam = function (name) {
    var obj = {
      name: name,
      players: [firebase.auth().currentUser.providerData[0].uid]
    };
    firebaseService.createObject('Teams', obj);
  };

  $scope.goToCreateTeam = function () {
    $location.path('/create-team');
  };
});