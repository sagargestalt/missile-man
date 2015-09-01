'use strict';

/**
 * @ngdoc directive
 * @name missileManApp.directive:facebookDirective
 * @description
 * # facebookDirective
 */
angular.module('missileManApp')
  .directive('csFacebookDir', function () {
    return {
      templateUrl: 'views/facebook.html',
      restrict: 'E',
      link: function postLink() {
        // element.text('this is the facebookDirective directive');
      }
    };
  });
