console.log('Exporting Helpers');

angular.module('app')
  .service('firebaseService', function($firebaseArray) {
    this.createObject = (key, obj) => {
      const ref = firebase.database().ref().child(key);
      const list = $firebaseArray(ref);
      
      list.$add(obj).then((ref) => {
        console.log('aptempting save');
        console.log(ref);
      }, (error) => {
        console.log(`Error: ${error.message}`);
      });
    };
    
    this.getAll = (key) => {
      const ref = firebase.database().ref().child(key);
      const list = $firebaseArray(ref);
      return list.$loaded();
    }
  });