(function(){
  'use strict'

  angular
    .module('bonsai')
    .config(configBlock);

  configBlock.$inject = ['$mdThemingProvider', '$locationProvider'];

  function configBlock($mdThemingProvider, $locationProvider) {
    //Generated using http://mcg.mbitson.com/#/
    $mdThemingProvider.definePalette('bonsaiPrimary', {
      '50': '#bdcbd6',
      '100': '#8ea6b9',
      '200': '#6c8ba3',
      '300': '#4c667b',
      '400': '#415768',
      '500': '#354755',
      '600': '#293742',
      '700': '#1d272f',
      '800': '#12181c',
      '900': '#06080a',
      'A100': '#bdcbd6',
      'A200': '#8ea6b9',
      'A400': '#415768',
      'A700': '#1d272f',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 A100 A200'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('bonsaiPrimary')
      .accentPalette('cyan');

    $locationProvider.html5Mode(true);
  }
})();
