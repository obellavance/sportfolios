angular.module('app')
  .service('firebaseService', function($firebaseArray) {
    this.createObject = (key, obj) => {
      const ref = firebase.database().ref().child(key);
      const list = $firebaseArray(ref);
      
      list.$add(obj).then((result) => {
        // Do we want to save it somewhere?
      }, (error) => {
        console.log(`Error: ${error.message}`);
      });
    };
    
    /** 
     * Returns a promise
    */
    this.getAll = (key) => {
      const ref = firebase.database().ref().child(key);
      const list = $firebaseArray(ref);
      return list.$loaded();
    }
  });