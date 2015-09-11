'use strict';

/**
* @ngdoc service
* @name missileManApp.csCourses
* @description
* # csCourses
* Factory in the missileManApp.
*/
angular.module('missileManApp')
.factory('csCourses',['$resource', function ($resource) {
  // var url = 'http://localhost/missile-man/services/index.php/courses/streams/:stream/:district';
  var url = 'http://digitalapproach.in/services/index.php/courses/streams/:stream/:district';
  return $resource( url, {
    stream: '@streams',
    district: '@district'
  } );
}]);
