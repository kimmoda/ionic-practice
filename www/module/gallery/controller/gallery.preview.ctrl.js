(function (window, angular, undefined) {
  'use strict';
  angular
    .module('module.gallery')
    .controller('GalleryPreviewCtrl', function (photo, Gallery, $stateParams) {
      var vm = this;
      vm.data = photo;
      console.log(photo);
    });
})(window, window.angular);
