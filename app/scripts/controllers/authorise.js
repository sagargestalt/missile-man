'use strict';

/**
 * @ngdoc function
 * @name missileManApp.controller:AuthoriseCtrl
 * @description
 * # AuthoriseCtrl
 * Controller of the missileManApp
 */
angular.module('missileManApp')
  .controller('AuthoriseCtrl', ['userFactory', '$scope', 'csNotication', '$state', function ( userFactory, $scope, csNotication, $state ) {
    var init,
        verifySuccess,
        verifyError;

    init = function () {
      $scope.user = {};
      if( userFactory.userData ) {
        $scope.user.firstName = userFactory.userData.firstName;
        $scope.user.phone = userFactory.userData.phone;
      }
      // $scope.user.phone = 9422987456;
      // $scope.user.otp = 1758;
    };

    verifySuccess = function( data ) {
      if( data.data.status === 301 ) {
        verifyError( data );
        return;
      }

      var config = {
        title: 'Congratulations..!!',
        message: 'You are verified now. Enter phone number and password on login and start exploring.',
        okText: 'Ok',
        cancelText: 'Cancel',
        showOK: true,
        showCancel: false,
        successCallback: function() {
          // $state.go( 'authorise' );
        },
        errorCallback: function() {
          // alert('error');
        }
      };
      csNotication.handle( config );
      $state.go( 'login' );
    };

    verifyError = function( data ) {
      var config = {
        title: 'Error..!!',
        message: data.data.message,
        okText: 'Contact Us',
        cancelText: 'Cancel',
        showOK: true,
        showCancel: true,
        successCallback: function() {
          $state.go( 'contact-us' );
        },
        errorCallback: function() {
          // alert('error');
        }
      };
      csNotication.handle( config );
    };

    $scope.verifyOTP = function() {
      var execute = userFactory
        .execute( { phone: $scope.user.phone,otp: $scope.user.otp, action: 'authorise' } );
        execute.$promise.then( verifySuccess, verifyError );
    };

    init();
  }]);
