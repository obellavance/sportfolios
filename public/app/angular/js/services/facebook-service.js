angular.module('app')
  .service('facebookService', function($http) {
    firebase.auth().getRedirectResult()
      .then((result) => {
        console.info(`Redirect results ${result.user}`, result.user);
        if (result.credential) {
          console.log(`accessToken: ${result.credential.accessToken}`);
        }
      })
    
    this.login = () => {
      const provider = new firebase.auth.FacebookAuthProvider();
      // provider.addScope('user_birthday');

      firebase.auth().signInWithRedirect(provider)
        .then((result) => {
          console.info(`Logged in with user ${result.user}`);
        })
        .catch((error) => {
          console.error(`Failed login with facebook with error ${error.message}`);
        });
    }
    
    this.logout = () => {
      firebase.auth().signOut();
    }
    
    this.getUserById = (id) => {
      
      console.log('HTTP 2', FB);

      // FB.api(
      //   `/${id}`,
      //   (response) => {
      //     console.log(response);
      //   });
      
      // $http.get({
      //   url: `https://graph.facebook.com/9MmNzHJnLsPqYxKyeH6fVXASgug2/?fields=first_name`,
      // })
      // .then((result) => {
      //   console.log(result);
      // })
      // .catch((error) => {
      //   console.error(`Error: ${error.message}`);
      // })
    }
  })