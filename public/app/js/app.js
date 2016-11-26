(function () {
  const config = {
    apiKey: "AIzaSyDD8I7t-oRml8ynG4FexBd_Tvu4WmqHXOw",
    authDomain: "sportfolios-3771b.firebaseapp.com",
    databaseURL: "https://sportfolios-3771b.firebaseio.com",
    storageBucket: "sportfolios-3771b.appspot.com",
    messagingSenderId: "994977381143"
  };
  firebase.initializeApp(config);
  
  angular
    .module('app', ['firebase'])
    .controller('MyCtrl', function ($firebaseObject) {
      const rootRef = firebase.database().ref().child('angular');
      const ref = rootRef.child('object');
      this.object = $firebaseObject(ref);
    });
}());