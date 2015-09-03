'use strict';

/**
 * @ngdoc service
 * @name missileManApp.user
 * @description
 * # user
 * Factory in the missileManApp.
 */
angular.module('missileManApp')
  .factory('userFactory', ["$resource", function ( $resource ) {

    var url = 'http://localhost/missile-man/services/index.php/users';

    return $resource( url, {} );

  }]);
