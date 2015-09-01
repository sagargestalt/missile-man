'use strict';

/**
 * @ngdoc directive
 * @name missileManApp.directive:navigationDirective
 * @description
 * # navigationDirective
 */
angular.module('missileManApp')
  .directive('csNavigationDir', function () {
    return {
      templateUrl: 'views/navigation.html',
      restrict: 'E',
      link: function postLink() {
        // element.text('this is the navigationDirective directive');
      }
    };
  });
