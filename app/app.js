(function () {
  'use strict';

  /* @ngdoc object
   * @name trakr
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('trakr', [
      'ui.router',
      'mgcrea.ngStrap',
      'underscore',
      'duScroll',
      'angularMoment',
      'home',
      'components'
    ]);

  angular
    .module('trakr')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
}());
