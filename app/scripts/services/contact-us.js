'use strict';

/**
 * @ngdoc service
 * @name missileManApp.contactUs
 * @description
 * # contactUs
 * Service in the missileManApp.
 */
angular.module('missileManApp').factory('contactUs', ['$resource', 'apiUrl', function ($resource, apiUrl) {
    return $resource( apiUrl.CONTACTUS, {} );
  }]);