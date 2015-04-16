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
        , api = null
        , videos = [];

        _.forEach(list, function (n) {
          videos.push({
            sources: [{src: $sce.trustAsResourceUrl(n), type: 'video/mp4'}]
          });
        });

        $scope.$watch('active', function (newValue, oldValue) {
          if (newValue !== oldValue) {
            vm.changeVideo(newValue);
          }
        });

        vm.onReady = function (API) {
          api = API;
        };

        vm.changeVideo = function (newVideoUrl) {
          videoIndex = _.indexOf(list, newVideoUrl);
          vm.config.sources = videos[videoIndex].sources;
          if (api.currentState === 'play') {
            $timeout(api.play.bind(api), 100);
          }
        };

        vm.onVideoComplete = function () {
          vm.config.autoPlay = true;
          videoIndex++;
          if (videoIndex === list.length) {
            videoIndex = 0;
            vm.config.autoPlay = false;
          }
          $scope.active = list[videoIndex];
        };

        vm.config = {
          autoPlay: false,
          sources: videos[videoIndex].sources
        };
      }
    };
  }
}());
