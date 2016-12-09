'use strict';

console.log('Exporting Helpers');

angular.module('app').service('firebaseService', function ($firebaseArray) {
  this.createObject = function (key, obj) {
    var ref = firebase.database().ref().child(key);
    var list = $firebaseArray(ref);

    list.$add(obj).then(function (ref) {
      console.log('aptempting save');
      console.log(ref);
    }, function (error) {
      console.log('Error: ' + error.message);
    });
  };

  this.getAll = function (key) {
    var ref = firebase.database().ref().child(key);
    var list = $firebaseArray(ref);
    return list.$loaded();
  };
});