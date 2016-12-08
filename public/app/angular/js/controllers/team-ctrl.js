angular.module('app')
  .controller('teamCtrl', ($scope, $firebaseArray, $firebaseObject, $location) => {
    const teamRef = firebase.database().ref().child('Teams');
    const list = $firebaseArray(teamRef);
    list.$loaded().then((result) => {
      $scope.teams = result;
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
    
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
  })