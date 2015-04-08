(function () {
  'use strict';

  /* @ngdoc object
   * @name components
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('components', [
      'underscore',
      'duScroll'
    ]);

  angular
    .module('components')
    .config(config);

  function config() {
  }
}());
