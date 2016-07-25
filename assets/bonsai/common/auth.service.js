(function(){
  'use strict'

  angular
    .module('bonsai')
    .service('authService', AuthService);

    AuthService.$inject = ['$http'];

    function AuthService($http) {
      function login(user) {
        return $http.post('/login', user).then(function(response){
          if(response && response.data){
            return response.data.user;
          } else {
            return false;
          }
        });
      }

      return {
        login: login
      }
    }
})();
