(function (window, angular, undefined) {
  'use strict';
  angular
    .module('module.user')
    .controller('UserSigninCtrl', function ($scope, AppConfig, $ionicPopup, UserForm, Loading, $state, gettextCatalog,
      Notify,
      User) {
      var vm = this;
      vm.routeLogged = AppConfig.routes.home;

      function init() {
        vm.form = {
          email: '',
          password: ''
        };

        if (window.Parse.User.current()) {
          $state.go(vm.routeLogged, {
            clear: true
          });
        }

      }

      init();

      vm.formFields = UserForm.login;

      vm.submitLogin = function (rForm, data) {

        var form = angular.copy(data);
        if (rForm.$valid) {
          User
            .login(form)
            .then(function (data) {
              console.log(data);
              if (data.name.length) {
                $state.go(vm.routeLogged, {
                  clear: true
                });
              } else {
                $state.go('useravatar', {
                  clear: true
                });
              }
            })
            .catch(function (resp) {
              Notify.alert({
                title: 'Ops',
                text: resp.message
              });
            });
        } else {
          return false;
        }
      };

      vm.facebook = function () {
        Loading.start();
        User
          .facebookLogin()
          .then(function (resp) {
            console.log(resp);

            Loading.end();
            switch (resp.status) {
            case 0:
              // logado
              $state.go(AppConfig.routes.home, {
                clear: true
              });
              break;
            case 1:
              // novo user
              $state.go('useravatar', {
                clear: true
              });
              break;
            case 2:
              // merge
              $state.go('usermerge', {
                clear: true
              })
              break;
            }
          })
          .catch(function () {
            Loading.end();
            Notify.alert({
              title: 'Ops',
              text: gettextCatalog.getString('Facebook error')
            });
          });
      }

    });
})(window, window.angular);
