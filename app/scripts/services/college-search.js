'use strict';

/**
 * @ngdoc service
 * @name missileManApp.collegeSearch
 * @description
 * # collegeSearch
 * Factory in the missileManApp.
 */
angular.module('missileManApp')
  .factory('collegeSearch', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
