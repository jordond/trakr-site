(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name trakr.directive:footer
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="trakr">
       <file name="index.html">
        <footer></footer>
       </file>
     </example>
   *
   */
  angular
    .module('components')
    .directive('footer', footer);

  function footer() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/components/footer/footer-directive.tpl.html',
      replace: false,
      controllerAs: 'footer',
      controller: function () {
        var vm = this;
        vm.name = 'footer';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
