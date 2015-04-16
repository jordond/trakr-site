(function () {
  'use strict';

  /* @ngdoc object
   * @name features
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('features', [
      'ui.router'
    ]);

  angular
    .module('features')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('features', {
        url: '/features',
        templateUrl: 'features/features.tpl.html',
        controller: 'FeaturesCtrl',
        controllerAs: 'features',
        resolve: {
          jsonService: function (JsonService) {
            return JsonService.get();
          }
        }
      });
  }
}());
