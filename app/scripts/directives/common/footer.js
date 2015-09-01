'use strict';

/**
 * @ngdoc directive
 * @name missileManApp.directive:footer
 * @description
 * # footer
 */
angular.module('missileManApp')
  .directive('csFooterDir', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the footer directive');
      }
    };
  });
