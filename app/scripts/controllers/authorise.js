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
    var init,
        verifySuccess,
        verifyError;

    init = function () {
      $scope.user = {};
      if( userFactory.userData ) {
        $scope.user.firstName = userFactory.userData.firstName;
        $scope.user.phone = userFactory.userData.phone;
      }
    };

    verifySuccess = function( data ) {
      console.log( 'Success' );
      console.log( data );
    };

    verifyError = function() {
      console.log( 'Error' );
      console.log( data );
    };

    $scope.verifyOTP = function() {
      console.dir( userFactory );
      // userFactory
      //   .save( $scope.user )
      //   .then( verifySuccess, verifyError );
    };

    init();
  }]);
