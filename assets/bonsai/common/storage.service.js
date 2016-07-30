(function(){
  'use strict'

  angular
    .module('bonsai')
    .service('storageService', StorageService);

    StorageService.$inject = ['localStorageService'];

    function StorageService(localStorageService) {
      function get(key) {
        return localStorageService.get(key);
      }

      function set(key, value) {
        return localStorageService.set(key, value);
      }

      function remove(key) {
        return localStorageService.remove(key);
      }

      function clearAll() {
        return localStorageService.clearAll();
      }

      return {
        get: get,
        set: set,
        remove: remove
      }
    }
})();
