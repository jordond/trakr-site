(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name components.directive:phone
   * @restrict EA
   * @element
   *
   * @description
   *   *
   */
  angular
    .module('components')
    .directive('phone', phone);

  function phone(_) {
    return {
      restrict: 'EA',
      scope: {
        video: '@',
        image: '@',
        args: '@'
      },
      templateUrl: 'components/phone/phone-directive.tpl.html',
      replace: true,
      controllerAs: 'phone',
      link: function (scope, element) {
        var videoElement
        , videoAttributes;

        if (scope.video) {
          videoElement = angular.element(element[0].querySelector('.video'));
          videoAttributes = _.words(scope.args);
          _.forEach(videoAttributes, function (n) {
            videoElement.attr(n, true);
          });
        }
      }
    };
  }
}());
