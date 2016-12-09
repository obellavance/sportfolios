angular.module('app')
  .controller('associationCtrl', (
    $scope, 
    $firebaseArray, 
    $firebaseObject, 
    $location,
    firebaseService,
  ) => {
    firebaseService.getAll('Associations').then((result) => {
      $scope.associations = result;
    });
    
    $scope.createAssociation = (name) => {
      const obj = {
        name: name,
        players: [firebase.auth().currentUser.providerData[0].uid]
      }
      
      firebaseService.createObject('Associations', obj);
    }
    
    $scope.goToCreateTeam = () => {
      $location.path('/create-association');
    }
  })