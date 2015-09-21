'use strict';

/**
* @ngdoc service
* @name missileManApp.csCourses
* @description
* # csCourses
* Factory in the missileManApp.
*/
angular.module('missileManApp')
.factory('csCourses',['$resource', 'apiUrl', function ($resource, apiUrl) {
  return $resource( apiUrl.COURSES, {
    stream: '@streams',
    district: '@district'
  } );
}]);
