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

  function multiVideoPhone($sce, $timeout, _) {
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
        , i;

        vm.state = null;
        vm.api = null;
        vm.videos = [];
        vm.videoIndex = _.indexOf(list, $scope.active);

        for (i = 0; i < list.length; i++) {
          vm.videos.push({
            sources: [{src: $sce.trustAsResourceUrl(list[i]), type: 'video/mp4'}]
          });
        }

        $scope.$watch('active', function (newValue, oldValue) {
          if (newValue !== oldValue) {
            vm.videoIndex++;
            if (vm.videoIndex > list.length) {
              vm.videoIndex = 0;
            }
            vm.changeVideo();
          }
        });

        vm.onReady = function (api) {
          vm.api = api;
        };

        vm.changeVideo = function () {
          vm.api.stop();
          vm.config.sources = vm.videos[vm.videoIndex].sources;
          $timeout(vm.api.play.bind(vm.api), 100);
        };

        vm.onVideoComplete = function () {
          $scope.active = list[vm.videoIndex + 1];
        };

        vm.config = {
          preload: 'none',
          autoHide: false,
          autoHideTime: 3000,
          autoPlay: true,
          sources: vm.videos[vm.videoIndex].sources
        };
      }
    };
  }
}());
