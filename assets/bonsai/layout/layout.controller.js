(function(){
  'use strict'

  angular
    .module('bonsai')
    .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = ['$mdSidenav','authService'];

    function LayoutCtrl($mdSidenav, authService) {
      var vm = this;

      function init() {
        vm.user = JSON.parse(authService.getUser());
      }

      vm.toggleSidenav = function(navID) {
        $mdSidenav(navID).toggle();
      }

      init();
    }
})();
