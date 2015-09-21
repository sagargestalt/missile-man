'use strict';

/**
 * @ngdoc service
 * @name missileManApp.user
 * @description
 * # user
 * Factory in the missileManApp.
 */
angular.module('missileManApp')
  .factory('userFactory', ['$resource', 'apiUrl', function ( $resource, apiUrl ) {
    return $resource( apiUrl.USERS, {
      action: '@action'
    }, {
      execute: {
        method: 'POST'
      }
    } );
  }]);
