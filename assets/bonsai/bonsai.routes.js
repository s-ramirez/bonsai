(function(){
  'use strict'

  angular
    .module('bonsai')
    .config(routesBlock);

  function routesBlock($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: '/bonsai/layout/layout.html',
        controller: 'LayoutCtrl',
        controllerAs: 'layout',
        data: {
          access: 1 // Administrator access
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: '/bonsai/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: '$ctrl',
        data: {
          access: 0 //User access
        }
      });
      $urlRouterProvider.otherwise('/dashboard');
  }
})();
