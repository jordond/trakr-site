(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name features.directive:features
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="features">
       <file name="index.html">
        <features></features>
       </file>
     </example>
   *
   */
  angular
    .module('features')
    .directive('features', features);

  function features($window, _) {
    return {
      restrict: 'EA',
      scope: {
        content: '='
      },
      templateUrl: 'features/features-directive.tpl.html',
      replace: true,
      controllerAs: 'features',
      controller: function ($scope) {
        var vm = this
        , content = $scope.content
        , chunkLength
        , list = [];

        /*jshint undef:false */
        /*eslint-disable*/
        vm.isLargeScreen = $(window).width() > 768;
        /*jshint undef:true */
        /*eslint-enable*/

        if (content) {
          chunkLength = Math.ceil(content.length / 2);
          vm.chunks = _.chunk(content, chunkLength);
          _.forEach(content, function (n) {
            list.push(_.pick(n, 'image', 'video'));
          });
          vm.videoList = list;
          vm.clicked = content[0].video;
        }
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
