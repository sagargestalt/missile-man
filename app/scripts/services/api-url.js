'use strict';

/**
 * @ngdoc service
 * @name missileManApp.apiUrl
 * @description
 * # apiUrl
 * Constant in the missileManApp.
 */
angular.module('missileManApp')
  .constant('apiUrl', (function() {
    var BASE_URL = 'services/index.php/',
        apiRoot = $('#apiRoot').attr('href') ? $('#apiRoot').attr('href') : '';

    BASE_URL = apiRoot + BASE_URL;
    return {
      'DISTRICT': BASE_URL + 'districts',
      'STREAMS': BASE_URL + 'streams/:action/:district',
      'COURSES': BASE_URL + 'courses/streams/:stream/:district',
      'USERS': BASE_URL + 'users/:action'
    };
  }()));
