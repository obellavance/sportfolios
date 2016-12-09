'use strict';

angular.module('app').controller('associationCtrl', function ($scope, $firebaseArray, $firebaseObject, $location, firebaseService) {
  firebaseService.getAll('Associations').then(function (result) {
    $scope.associations = result;
  });

  $scope.createAssociation = function (name) {
    var obj = {
      name: name,
      players: [firebase.auth().currentUser.providerData[0].uid]
    };

    firebaseService.createObject('Associations', obj);
  };

  $scope.goToCreateTeam = function () {
    $location.path('/create-association');
  };
});