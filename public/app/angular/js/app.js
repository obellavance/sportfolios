const config = {
  apiKey: "AIzaSyDD8I7t-oRml8ynG4FexBd_Tvu4WmqHXOw",
  authDomain: "sportfolios-3771b.firebaseapp.com",
  databaseURL: "https://sportfolios-3771b.firebaseio.com",
  storageBucket: "sportfolios-3771b.appspot.com",
  messagingSenderId: "994977381143"
};
firebase.initializeApp(config);

angular.module('app', ['ngRoute', 'firebase']);