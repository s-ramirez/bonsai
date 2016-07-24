(function(){
  'use strict'

  angular
    .module('bonsai')
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['authService'];

    function LoginCtrl(authService) {
      var vm = this;

      vm.login = function() {
        authService.login().then(function(response){
          if(!response.user) {
            console.log(response);
          }
        }, function(err){

        });
      };
    }
})();
