(function(){
  'use strict'

  angular
    .module('bonsai', ['ngMaterial', 'ui.router', 'LocalStorageModule'])
    .run(runBlock);

  function runBlock($rootScope, $state, authService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (toState.name != 'login' && !authService.isAuthenticated()) {
        event.preventDefault();
        $state.go('login');
      }
    });
  }
})();
