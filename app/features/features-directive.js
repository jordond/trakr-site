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

  function features() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'features/features-directive.tpl.html',
      replace: true,
      controllerAs: 'features',
      controller: function () {
        var vm = this;
        vm.name = 'features';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
