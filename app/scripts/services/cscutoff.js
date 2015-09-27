'use strict';

/**
 * @ngdoc service
 * @name missileManApp.csCutoff
 * @description
 * # csCutoff
 * Factory in the missileManApp.
 */
angular.module('missileManApp')
  .factory('csCutoff',
  ['$resource','apiUrl',
  function ($resource, apiUrl) {
    return $resource(apiUrl.CUTOFF_DETAILS, {
      id: '@collegeId'
    });
  }]);
