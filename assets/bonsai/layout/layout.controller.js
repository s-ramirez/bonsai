(function(){
  'use strict'

  angular
    .module('bonsai')
    .controller('LayoutCtrl', LayoutCtrl);

    function LayoutCtrl() {
      var vm = this;

      vm.message = 'Hello';
      vm.user = 'Test';
    }
})();
