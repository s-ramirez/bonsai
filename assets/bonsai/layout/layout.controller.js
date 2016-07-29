(function(){
  'use strict'

  angular
    .module('bonsai')
    .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = ['authService'];

    function LayoutCtrl(authService) {
      var vm = this;

      function init() {
        vm.user = authService.getUser();
      }

      init();
    }
})();
