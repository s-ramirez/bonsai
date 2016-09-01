(function(){
  'use strict'

  angular
    .module('bonsai', ['ui.bootstrap', 'ui.router', 'LocalStorageModule'])
    .run(runBlock);

  function runBlock($rootScope, authService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (toState.name != 'login' && !authService.isAuthenticated()) {
        event.preventDefault();
        $state.go('login');
      }
    });
  }
})();
