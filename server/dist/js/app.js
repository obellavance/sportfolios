"use strict";

(function () {
  var config = {
    apiKey: "AIzaSyDD8I7t-oRml8ynG4FexBd_Tvu4WmqHXOw",
    authDomain: "sportfolios-3771b.firebaseapp.com",
    databaseURL: "https://sportfolios-3771b.firebaseio.com",
    storageBucket: "sportfolios-3771b.appspot.com",
    messagingSenderId: "994977381143"
  };
  firebase.initializeApp(config);

  angular.module('app', ['firebase']).controller('MyCtrl', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        $scope.user = user;
        $scope.$apply();
      } else {
        $scope.user = undefined;
        $scope.$apply();
      }
    });

    firebase.auth().getRedirectResult().then(function (result) {
      console.info("Redirect results " + result.user, result.user);
    });

    $scope.facebookLogin = function () {
      var provider = new firebase.auth.FacebookAuthProvider();
      // provider.addScope('user_birthday');

      firebase.auth().signInWithRedirect(provider).then(function (result) {
        console.info("Logged in with user " + result.user);
      }).catch(function (error) {
        console.error("Failed login with facebook with error " + error.message);
      });
    };

    $scope.logout = function () {
      firebase.auth().signOut();
    };
  }]);
})();