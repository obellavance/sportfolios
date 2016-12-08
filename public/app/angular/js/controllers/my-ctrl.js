angular.module('app')
  .controller('MyCtrl', ($scope, $firebaseArray, $firebaseObject, $location) => {
    
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

    const teamRef = firebase.database().ref().child('Teams');
    const list = $firebaseArray(teamRef);
    list.$loaded().then((result) => {
      $scope.teams = result;
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });

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
      const ref = firebase.database().ref().child('Games');
      const list = $firebaseArray(ref);
      const obj = {
        team1: team1,
        team2: team2,
        score1: score1,
        score2: score2
      };
      
      list.$add(obj).then((ref) => {
        console.log('aptempting save');
        console.log(ref);
      }, (error) => {
        console.log(`Error: ${error.message}`);
      });
    }
    
    $scope.createTeam = (name) => {
      const ref = firebase.database().ref().child('Teams');
      const list = $firebaseArray(ref);
      const obj = {
        name: name,
        players: [firebase.auth().currentUser.providerData[0].uid]
      }
      
      list.$add(obj).then((ref) => {
        console.log('finished save');
        console.log(ref);
      }, (error) => {
        console.log(`Error: ${error.message}`);
      });
    }
    
    $scope.goToCreateTeam = () => {
      $location.path('/create-team');
    }
  });