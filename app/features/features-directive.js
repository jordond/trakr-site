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

  function features(_) {
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
        , chunked;

        if (content) {
          chunkLength = Math.ceil(content.length / 2);
          chunked = _.chunk(content, chunkLength);

          vm.leftChunk = chunked[0];
          vm.rightChunk = chunked[1];
          vm.chunked = chunked;
        }
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
