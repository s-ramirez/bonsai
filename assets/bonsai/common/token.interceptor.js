(function(){
  'use strict'

  angular
    .module('bonsai')
    .service('tokenInterceptor', TokenInterceptor);

    TokenInterceptor.$inject = ['$q', '$injector'];

    function TokenInterceptor($q, $injector) {
      var storageService = $injector.get('storageService');

      function request(config) {
        var token;
        if(storageService.get('token')) {
          token = angular.fromJson(LocalService.get('token')).token;
        }
        if(token) {
          config.headers.Authorization = token;
        }
        return config;
      }

      function responseError(response) {
        if (response.status === 401 || response.status === 403) {
          storageService.remove('token');
          $injector.get('$location').path('/login');
        }
        return $q.reject(response);
      }

      return {
        request: request,
        responseError: responseError
      }
    }
})();
