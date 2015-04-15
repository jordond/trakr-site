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
      'duScroll',
      'ngSanitize',
      'com.2fdevs.videogular',
      'com.2fdevs.videogular.plugins.buffering',
      'com.2fdevs.videogular.plugins.poster'
    ]);

  angular
    .module('components')
    .config(config);

  function config() {
  }
}());
