(function(){
  'use strict'

  angular
    .module('bonsai')
    .service('storageService', StorageService);

    function StorageService() {
      function get(key) {
        return localStorage.getItem(key);
      }

      function set(key, value) {
        return localStorage.setItem(key, value);
      }

      function remove(key) {
        return localStorage.removeItem(key);
      }

      return {
        get: get,
        set: set,
        remove: remove
      }
    }
})();
