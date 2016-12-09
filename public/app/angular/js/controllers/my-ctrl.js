angular.module('app')
  .controller('MyCtrl', (
    $scope, 
    $firebaseArray, 
    $firebaseObject, 
    $location, 
    firebaseService
  ) => {
    
    console.log(`firebaseService`, firebaseService);
    // console.log(firebaseHelper);
    
    firebase.auth().onAuthStateChanged((user) => {
      console.log('User State Changed: ', user)
      console.log('actual user', firebase.auth().currentUser);
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
        
        console.info(`Redirect results ${result.user}`, result.user);
        if (result.credential) {
          console.log(`accessToken: ${result.credential.accessToken}`);
        }
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
    
    $scope.submitScore = (team1, team2, score1, score2) => {
      const obj = {
        team1: team1,
        team2: team2,
        score1: score1,
        score2: score2
      };
      
      firebaseService.createObject('Games', obj);
    }
    
    
  });