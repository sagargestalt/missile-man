'use strict';

/**
 * @ngdoc function
 * @name missileManApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the missileManApp
 */
angular.module('missileManApp')
  .controller('LoginCtrl',
  ['$scope','userFactory', 'csNotication','$state','$rootScope',
  function ($scope, userFactory, csNotication, $state, $rootScope) {
    var init,
        loginSuccess,
        loginError;

    init = function() {
      $scope.user = {};
      // $scope.user.phone = '9422987456';
      // $scope.user.password = 'demo';
      $scope.user.phone = '';
      $scope.user.password = '';
    };

    loginSuccess = function( resp ) {
      if( resp.data.status === 301 ) {
        loginError( resp );
        return;
      }
      // console.log( 'success' );
      // console.log( resp );
      var config = {
        title: 'Login',
        message: 'You have successfully logged in.',
        okText: 'Ok',
        cancelText: 'Cancel',
        showOK: true,
        showCancel: true,
        successCallback: function() {
          // $state.go( 'authorise' );
        },
        errorCallback: function() {
          // alert('error');
        }
      };
      csNotication.handle( config );
      $state.go( 'dashboard' );
    };

    loginError = function( resp ) {
      console.log( 'error' );
      console.log( resp );
    };

    $scope.loginSubmit = function() {
      // alert('demo');
      var execute = userFactory
            .execute( { phone: $scope.user.phone,password: $scope.user.password, action: 'login' } );
      execute.$promise.then(loginSuccess, loginError);
      $rootScope.unableLogin= true;
    };

    init();

  }]);
