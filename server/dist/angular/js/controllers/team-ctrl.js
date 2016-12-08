'use strict';

angular.module('app').controller('teamCtrl', function ($scope, $firebaseArray, $firebaseObject, $location) {
  var teamRef = firebase.database().ref().child('Teams');
  var list = $firebaseArray(teamRef);
  list.$loaded().then(function (result) {
    $scope.teams = result;
  }).catch(function (error) {
    console.error('Error: ' + error.message);
  });

  $scope.createTeam = function (name) {
    var ref = firebase.database().ref().child('Teams');
    var list = $firebaseArray(ref);
    var obj = {
      name: name,
      players: [firebase.auth().currentUser.providerData[0].uid]
    };

    list.$add(obj).then(function (ref) {
      console.log('finished save');
      console.log(ref);
    }, function (error) {
      console.log('Error: ' + error.message);
    });
  };

  $scope.goToCreateTeam = function () {
    $location.path('/create-team');
  };
});