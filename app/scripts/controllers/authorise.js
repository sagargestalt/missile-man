'use strict';

/**
 * @ngdoc function
 * @name missileManApp.controller:AuthoriseCtrl
 * @description
 * # AuthoriseCtrl
 * Controller of the missileManApp
 */
angular.module('missileManApp')
  .controller('AuthoriseCtrl', ["userFactory", "$scope", function ( userFactory, $scope ) {
    var init;

    init = function () {
      $scope.user = {};
      if( userFactory.userData ) {
        $scope.user.phone = userFactory.userData.phone;
      }
    };

    init();
  }]);
