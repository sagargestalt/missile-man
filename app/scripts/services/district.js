'use strict';

/**
 * @ngdoc service
 * @name missileManApp.csDistrict
 * @description
 * # csDistrict
 * Factory in the missileManApp.
 */
angular.module('missileManApp')
  .factory('csDistrict',['$resource', 'apiUrl', function ($resource,apiUrl) {
    return $resource( apiUrl.DISTRICT, {} );
  }]);
