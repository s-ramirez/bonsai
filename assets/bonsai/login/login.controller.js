(function(){
  'use strict'

  angular
    .module('bonsai')
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$mdToast', 'authService', 'toastService'];

    function LoginCtrl($mdToast, authService, toastService) {
      var vm = this;
      var incorrectToast = toastService.getIncorrectLoginToast();
      var serverErrorToast = toastService.getServerErrorToast();

      vm.login = function() {
        var user = {
          email: vm.email,
          password: vm.password
        };

        authService.login(user).then(function(user){
          if(!user) {
            $mdToast.show(incorrectToast);
          }
        }, function(err){
          $mdToast.show(serverErrorToast);
        });
      };
    }
})();
