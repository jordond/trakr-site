(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name components.directive:multiVideoPhone
   * @restrict EA
   * @element
   *
   * @description
   *
   */
  angular
    .module('components')
    .directive('multiVideoPhone', multiVideoPhone);

  function multiVideoPhone($sce, _) {
    return {
      restrict: 'EA',
      scope: {
        videoList: '=',
        active: '='
      },
      templateUrl: 'components/phone/multi-video-phone-directive.tpl.html',
      replace: false,
      controllerAs: 'phone',
      controller: function ($scope) {
        var vm = this
        , list = $scope.videoList
        , active = $scope.active
        , url
        , i;

        vm.state = null;
        vm.api = null;
        vm.videos = [];
        vm.videoIndex = _.indexOf(list, active);

        for (i = 0; i < list.length; i++) {
          url = $sce.trustAsResourceUrl(list[i]);
          vm.videos.push({
            sources: [{src: url, type: {'': 'video/mp4'}}]
          });
        }
      }
    };
  }
}());
