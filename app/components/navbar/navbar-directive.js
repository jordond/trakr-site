(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name components.directive:navbar
   * @restrict EA
   * @element
   *
   * @description
   *
   */
  angular
    .module('components')
    .directive('navbar', navbar);

  function navbar() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'components/navbar/navbar-directive.tpl.html',
      replace: true,
      controllerAs: 'navbar',
      controller: function () {
      }
    };
  }
}());
