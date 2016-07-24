(function(){
  'use strict'

  angular
    .module('bonsai')
    .service('authService', AuthService);

    AuthService.$inject = ['$http'];

    function AuthService($http) {
      function login(user) {
        return $http.post('/login', user);
      }

      return {
        login: login
      }
    }
})();
