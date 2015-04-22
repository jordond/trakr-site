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
        , defaultImage = $scope.defaultImage
        , activeIndex = _.findIndex(list, {video: $scope.active})
        , api = null
        , videos = [];

        _.forEach(list, function (n) {
          videos.push({
            sources: [{src: $sce.trustAsResourceUrl(n.video), type: 'video/mp4'}]
          });
        });

        $scope.$watch('active', function (newValue, oldValue) {
          if (newValue !== oldValue) {
            vm.changeVideo(newValue);
            vm.updatePoster();
          }
        });

        vm.onReady = function (API) {
          api = API;
          vm.updatePoster();
        };

        vm.changeVideo = function (newVideoUrl) {
          activeIndex = _.findIndex(list, {video: newVideoUrl});
          vm.config.sources = videos[activeIndex].sources;
          if (vm.config.autoPlay) {
            $timeout(api.play.bind(api), 100);
          }
        };

        vm.onVideoComplete = function () {
          vm.config.autoPlay = true;
          activeIndex++;
          if (activeIndex === list.length) {
            activeIndex = 0;
            vm.config.autoPlay = false;
          }
          $scope.active = list[activeIndex].video;
        };

        vm.updatePoster = function () {
          var image = !list[activeIndex].image ? defaultImage : list[activeIndex].image;
          api.mediaElement.attr('poster', image);
        };

        vm.config = {
          autoPlay: false,
          sources: videos[activeIndex].sources
        };
      }
    };
  }
}());
