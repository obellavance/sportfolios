'use strict';

angular.module('app').service('firebaseService', function ($firebaseArray) {
  this.createObject = function (key, obj) {
    var ref = firebase.database().ref().child(key);
    var list = $firebaseArray(ref);

    list.$add(obj).then(function (result) {
      // Do we want to save it somewhere?
    }, function (error) {
      console.log('Error: ' + error.message);
    });
  };

  /** 
   * Returns a promise
  */
  this.getAll = function (key) {
    var ref = firebase.database().ref().child(key);
    var list = $firebaseArray(ref);
    return list.$loaded();
  };
});