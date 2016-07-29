(function(){
  'use strict'

  angular
    .module('bonsai', ['ngMaterial', 'ui.router'])
    .run(runBlock);

  function runBlock($rootScope, $state, authService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (!authService.authorize(toState.data.access)) {
        event.preventDefault();
        $state.go('login');
      }
    });
  }
})();
