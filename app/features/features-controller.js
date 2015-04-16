(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name features.controller:FeaturesCtrl
   *
   * @description
   *
   */
  angular
    .module('features')
    .controller('FeaturesCtrl', FeaturesCtrl);

  function FeaturesCtrl(JsonService) {
    var vm = this;
    vm.json = JsonService.find('features');
  }
}());
