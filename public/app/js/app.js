(function () {
  const config = {
    apiKey: "AIzaSyDD8I7t-oRml8ynG4FexBd_Tvu4WmqHXOw",
    authDomain: "sportfolios-3771b.firebaseapp.com",
    databaseURL: "https://sportfolios-3771b.firebaseio.com",
    storageBucket: "sportfolios-3771b.appspot.com",
    messagingSenderId: "994977381143"
  };
  firebase.initializeApp(config);
  
  angular
    .module('app', ['firebase'])
    .controller('MyCtrl', ['$scope', '$firebaseObject', ($scope, $firebaseObject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          $scope.user = user;
          console.info(`User: ${user.displayName}`, user);
          $scope.$apply();
        } else {
          $scope.user = undefined;
          console.info(`User: ${$scope.user}`);
          $scope.$apply();
        }
      });

      $scope.testValue = "Allo!";

      firebase.auth().getRedirectResult()
        .then((result) => {
          console.info(`Redirect results ${result.user}`, result.user);
        })

      $scope.facebookLogin = () => {
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithRedirect(provider)
          .then((result) => {
            console.info(`Logged in as user`, result.user);
          })
          .catch((error) => {
            console.error(`Failed login with facebook with error ${error.message}`);
          });
      }

      $scope.logout = () => {
        firebase.auth().signOut();
        console.info('Sign out');
      }
    }]);
}());