(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name json.service:Json
   *
   * @description
   *
   */
  angular
    .module('components')
    .service('JsonService', Json);

  function Json($http, $log, _) {
    var self = this
    , jsonDir = 'json/'
    , jsonFile = 'app.json';

    self.resume = {};

    self.get = function () {
      return $http.get(jsonDir + jsonFile)
        .success(function (data) {
          self.resume = data;
        })
        .error(function (data, status) {
          $log.error(status + ' ' + data);
        });
    };

    self.find = function (key) {
      return _.chain(self.resume)
        .pluck(key)
        .reject(_.isUndefined)
        .first()
        .value();
    };
  }
}());
