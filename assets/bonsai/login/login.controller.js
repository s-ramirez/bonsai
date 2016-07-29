(function(){
  'use strict'

  angular
    .module('bonsai')
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$mdToast', '$location', 'authService', 'toastService'];

    function LoginCtrl($mdToast, $location, authService, toastService) {
      var vm = this;
      var incorrectToast = toastService.getIncorrectLoginToast();
      var serverErrorToast = toastService.getServerErrorToast();

      vm.login = function() {
        var user = {
          email: vm.email,
          password: vm.password
        };

        authService.authorize(user).then(function(user){
          if(!user) {
            $mdToast.show(incorrectToast);
          } else {
            $location.path('/admin');
          }
        }, function(err){
          $mdToast.show(serverErrorToast);
        });
      };
    }
})();
