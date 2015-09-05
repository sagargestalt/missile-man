'use strict';

/**
 * @ngdoc function
 * @name missileManApp.controller:ModalinstanceCtrl
 * @description
 * # ModalinstanceCtrl
 * Controller of the missileManApp
 */
angular.module('missileManApp')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, config ) {
    var init;

    init = function() {
      $scope.title = config.title;
      $scope.message = config.message;
      $scope.okText = config.okText;
      $scope.cancelText = config.cancelText;
      $scope.showOK = config.showOK;
      $scope.showCancel = config.showCancel;
    };

    $scope.ok = function( data ) {
      $modalInstance.close( data );
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };

    init();
  });
