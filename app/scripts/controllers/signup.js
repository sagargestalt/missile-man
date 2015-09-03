'use strict';

/**
 * @ngdoc function
 * @name missileManApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the missileManApp
 */
angular.module('missileManApp')
  .controller('SignUpCtrl',["userFactory", "$scope",
    function ( userFactory, $scope ) {

    var init,
        user;

    init = function() {
      $scope.user = {};
      $scope.user.userType = 'S';
      $scope.user.firstName = '';
      $scope.user.lastName = '';
      $scope.user.phone = '';
      $scope.user.gender = 'M';
      $scope.user.district = '';
      $scope.user.aboutMe = '';
      $scope.user.email = '';
      $scope.user.password = '';

      $scope.acceptTerms = false;

      // $scope.user = angular.copy( user );
      // userFactory.get( function( x ) {
      //   console.log( x.data );
      // } );
    };

    $scope.submit = function () {
      // $scope.user = angular.copy( user );
      // $scope.user.$save();
      userFactory.save( $scope.user );
    };

    init();
  }]);
