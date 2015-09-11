'use strict';

/**
 * @ngdoc service
 * @name missileManApp.csDistrict
 * @description
 * # csDistrict
 * Factory in the missileManApp.
 */
angular.module('missileManApp')
  .factory('csDistrict',['$resource', function ($resource) {
    // var url = 'http://localhost/missile-man/services/index.php/districts';
    var url = 'http://digitalapproach.in/services/index.php/districts';
    return $resource( url, {} );
  }]);
