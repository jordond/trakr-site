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
        , active = $scope.active
        , i;

        vm.state = null;
        vm.api = null;
        vm.videos = [];
        vm.videoIndex = _.indexOf(list, active);

        for (i = 0; i < list.length; i++) {
          vm.videos.push({
            sources: [{src: $sce.trustAsResourceUrl(list[i]), type: 'video/mp4'}]
          });
        }

        $scope.$watch('active', function (newValue, oldValue) {
          if (newValue !== oldValue) {
            vm.changeVideo(newValue);
          }
        });

        vm.onReady = function (api) {
          vm.api = api;
        };

        vm.changeVideo = function (videoUrl) {
          vm.api.stop();
          vm.videoIndex = _.indexOf(list, videoUrl);
          vm.config.sources = vm.videos[vm.videoIndex].sources;
          $timeout(vm.api.play.bind(vm.api), 100);
        };

        vm.onVideoComplete = function () {
          console.log('done video');
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
