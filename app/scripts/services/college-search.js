'use strict';

/**
 * @ngdoc service
 * @name missileManApp.collegeSearch
 * @description
 * # collegeSearch
 * Factory in the missileManApp.
 */
angular.module('missileManApp')
  .factory('collegeSearch',
  ['$resource', 'apiUrl',
  function ( $resource, apiUrl ) {
    var searchFn,
        cutoffFn;

    searchFn = function() {
      return $resource(apiUrl.COLLEGE_SEARCH, {
        id: '@collegeId'
      });
    };

    cutoffFn = function() {
      return $resource(apiUrl.COLLEGE_CUTOFF);
    };

    return {
        search: searchFn,
        cutoff: cutoffFn
    };

  }]);
