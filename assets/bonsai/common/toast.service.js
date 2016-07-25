(function(){
  'use strict'

  angular
    .module('bonsai')
    .service('toastService', ToastService);

    ToastService.$inject = ['$mdToast'];

    function ToastService($mdToast) {
      var toastOptions = {
        position: {
          right: true,
          top: true
        },
        delay: 3000
      }

      function buildToast(message) {
        return $mdToast.simple()
          .textContent(message)
          .position(toastOptions.position)
          .hideDelay(toastOptions.delay)
      }

      function getIncorrectLoginToast() {
        return buildToast('Incorrect username or password');
      }

      function getServerErrorToast() {
        return buildToast('Error connecting to server, please try again later');
      }

      return {
        getServerErrorToast: getServerErrorToast,
        getIncorrectLoginToast: getIncorrectLoginToast
      }
    }
})();
