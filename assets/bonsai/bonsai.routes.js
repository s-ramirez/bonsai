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
        abstract: true
      })
      .state('dashboard.main', {
        url: '/main',
        views: {
          'container': {
            templateUrl: '/bonsai/dashboard/dashboard.html',
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard'
          }
        }
      })
      .state('login', {
        templateUrl: '/bonsai/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: '$ctrl'
      });

    $urlRouterProvider.otherwise('/dashboard/main');
  }
})();
