(function(){
  'use strict'

  angular
    .module('bonsai')
    .service('authService', AuthService);

    AuthService.$inject = ['$http', 'storageService'];

    function AuthService($http, storageService) {

      function authorize(user) {
        return $http.post('/api/login', user).then(function(response){
          if(response && response.data){
            storageService.set('token', JSON.stringify(response.data.token));
            storageService.set('user', JSON.stringify(response.data.user));
            return response.data.user;
          } else {
            return false;
          }
        });
      }

      function getUser() {
        return storageService.get('user');
      }

      function logout() {
        storageService.remove('token');
      }

      function isAuthenticated() {
        return storageService.get('token');
      }

      return {
        authorize: authorize,
        logout: logout,
        getUser: getUser,
        isAuthenticated: isAuthenticated
      }
    }
})();
