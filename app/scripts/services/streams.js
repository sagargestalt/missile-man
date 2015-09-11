'use strict';

/**
* @ngdoc service
* @name missileManApp.csStreams
* @description
* # csStreams
* Factory in the missileManApp.
*/
angular.module('missileManApp')
.factory('csStreams',['$resource', function ($resource) {
  // var url = 'http://localhost/missile-man/services/index.php/streams/:action/:district';
  var url = 'http://digitalapproach.in/services/index.php/streams/:action/:district';
  return $resource( url, {
    action: '@action',
    district: '@district'
  } );
}]);
