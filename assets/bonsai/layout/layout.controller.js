(function(){
  'use strict'

  angular
    .module('bonsai')
    .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = ['authService'];

    function LayoutCtrl(authService) {
      var vm = this;
      vm.sidebarActive = true;
      
      vm.toggleSidebar = function() {
        vm.sidebarActive = !vm.sidebarActive;
      };
    }
})();
