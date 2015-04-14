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

  function phone() {
    return {
      restrict: 'EA',
      scope: {
        video: '@',
        image: '@'
      },
      templateUrl: 'components/phone/phone-directive.tpl.html',
      replace: true,
      controllerAs: 'phone',
      controller: function () {
        var vm = this;
        vm.name = 'phone';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
