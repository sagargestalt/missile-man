'use strict';

/**
 * @ngdoc service
 * @name missileManApp.collegeSearch
 * @description
 * # collegeSearch
 * Factory in the missileManApp.
 */
angular.module('missileManApp')
  .factory('collegeSearch',['$resource', function ( $resource ) {
    // var url = 'http://localhost/missile-man/services/index.php/colleges/search/:id';
    var url = 'http://digitalapproach.in/services/index.php/colleges/search/:id';

    return $resource(url, {
      id: '@collegeId'
    });
  }]);
