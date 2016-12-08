'use strict';

angular.module('app').controller('MyCtrl', function ($scope, $firebaseArray, $firebaseObject, $location) {

  firebase.auth().onAuthStateChanged(function (user) {
    console.log('User State Changed: ', user);
    console.log('actual user', firebase.auth().currentUser);
    if (user) {
      $scope.user = user;
      $scope.$apply();
    } else {
      $scope.user = undefined;
      $scope.$apply();
    }
  });

  firebase.auth().getRedirectResult().then(function (result) {

    console.info('Redirect results ' + result.user, result.user);
    if (result.credential) {
      console.log('accessToken: ' + result.credential.accessToken);
    }
  });

  var teamRef = firebase.database().ref().child('Teams');
  var list = $firebaseArray(teamRef);
  list.$loaded().then(function (result) {
    $scope.teams = result;
  }).catch(function (error) {
    console.error('Error: ' + error.message);
  });

  $scope.facebookLogin = function () {
    var provider = new firebase.auth.FacebookAuthProvider();
    // provider.addScope('user_birthday');

    console.log('added add range');

    firebase.auth().signInWithRedirect(provider).then(function (result) {
      console.info('Logged in with user ' + result.user);
    }).catch(function (error) {
      console.error('Failed login with facebook with error ' + error.message);
    });
  };

  $scope.logout = function () {
    firebase.auth().signOut();
  };

  $scope.submitScore = function (team1, team2, score1, score2) {
    var ref = firebase.database().ref().child('Games');
    var list = $firebaseArray(ref);
    var obj = {
      team1: team1,
      team2: team2,
      score1: score1,
      score2: score2
    };

    list.$add(obj).then(function (ref) {
      console.log('aptempting save');
      console.log(ref);
    }, function (error) {
      console.log('Error: ' + error.message);
    });
  };

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