(function () {
    'use strict';
    angular
        .module('ionic-loading', [
            'ionic'
        ])
        .directive('ionLoading', function () {
            return {
                restrict: 'E',
                scope   : {
                    icon   : '@',
                    loading: '='
                },
                template: '<div class="padding text-center loading" ng-show="loading"><ion-spinner icon="{{ icon }}"></ion-spinner></div>'
            }
        })
        .factory('Loading', function ($rootScope, $timeout) {

            var seconds = 2;

            function showLoading() {
                $rootScope.$broadcast('ionicLoading:true');
            }

            function hideLoading() {
                $timeout(function () {
                    $rootScope.$broadcast('ionicLoading:false');
                }, parseInt(seconds + '000'));
            }

            return {
                start: showLoading,
                end  : hideLoading,
            }
        }
    )
        .run(function ($rootScope, $ionicLoading) {
            //Loading

            $rootScope.$on('ionicLoading:true', function () {
                $rootScope.loading = true;
                $ionicLoading.show();
            });
            $rootScope.$on('ionicLoading:false', function () {
                $rootScope.loading = false;
                $ionicLoading.hide();
            });
        })
    ;
})();