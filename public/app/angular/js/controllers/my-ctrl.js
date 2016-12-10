angular.module('app')
  .controller('MyCtrl', (
    $scope, 
    $firebaseArray, 
    $firebaseObject, 
    $location, 
    facebookService,
    firebaseService,
  ) => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('User State Changed: ', user)
      console.log('actual user', firebase.auth().currentUser);
      if (user) {
        $scope.user = user;
        $scope.$apply();
      } else {
        $scope.user = undefined;
        $scope.$apply();
        $location.path('/');
      }
    });

    $scope.facebookLogin = () => {
      facebookService.login();
      
    }

    $scope.logout = () => {
      facebookService.logout();
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