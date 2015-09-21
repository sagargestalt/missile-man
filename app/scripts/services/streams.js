'use strict';

/**
* @ngdoc service
* @name missileManApp.csStreams
* @description
* # csStreams
* Factory in the missileManApp.
*/
angular.module('missileManApp')
.factory('csStreams',['$resource', 'apiUrl', function ($resource, apiUrl) {
  return $resource( apiUrl.STREAMS, {
    action: '@action',
    district: '@district'
  } );
}]);
