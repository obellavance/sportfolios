'use strict';

angular.module('app').controller('MyCtrl', function ($scope, $firebaseObject) {
  firebase.auth().onAuthStateChanged(function (user) {
    console.log('User State Changed: ', user);

    if (user) {
      $scope.user = user;
      $scope.$apply();
    } else {
      $scope.user = undefined;
      $scope.$apply();
    }
  });

  firebase.auth().getRedirectResult().then(function (result) {
    token = result.credential.accessToken;
    console.info('Redirect results ' + result.user, result.user, result.credential.accessToken);
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
});