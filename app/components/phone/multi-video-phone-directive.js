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
        active: '=',
        defaultImage: '@'
      },
      templateUrl: 'components/phone/multi-video-phone-directive.tpl.html',
      replace: false,
      controllerAs: 'phone',
      controller: function ($scope) {
        var vm = this
        , list = $scope.videoList
        , videoIndex = _.indexOf(list, $scope.active)
        , i;

        vm.api = null;
        vm.videos = [];

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

        vm.changeVideo = function (newVideo) {
          videoIndex = _.indexOf(list, newVideo);
          vm.config.sources = vm.videos[videoIndex].sources;
          if (vm.api.currentState === 'play') {
            $timeout(vm.api.play.bind(vm.api), 100);
          }
        };

        vm.onVideoComplete = function () {
          videoIndex++;
          if (videoIndex >= list.length) {
            vm.videoIndex = 0;
          }
          $scope.active = list[videoIndex];
        };

        vm.config = {
          preload: 'none',
          autoHide: false,
          autoHideTime: 3000,
          autoPlay: false,
          sources: vm.videos[videoIndex].sources
        };
      }
    };
  }
}());
