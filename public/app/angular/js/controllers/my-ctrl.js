angular.module('app')
  .controller('MyCtrl', ($scope, $firebaseObject) => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('User State Changed: ', user)
      
      if (user) {
        $scope.user = user;
        $scope.$apply();
      } else {
        $scope.user = undefined;
        $scope.$apply();
      }
    });
    
    firebase.auth().getRedirectResult()
      .then((result) => {
        token = result.credential.accessToken;
        console.info(`Redirect results ${result.user}`, result.user, result.credential.accessToken);
      })

    $scope.facebookLogin = () => {
      const provider = new firebase.auth.FacebookAuthProvider();
      // provider.addScope('user_birthday');

      console.log('added add range');

      firebase.auth().signInWithRedirect(provider)
        .then((result) => {
          console.info(`Logged in with user ${result.user}`);
        })
        .catch((error) => {
          console.error(`Failed login with facebook with error ${error.message}`);
        });
    }

    $scope.logout = () => {
      firebase.auth().signOut();
    }
  });