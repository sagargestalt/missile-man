'use strict';

/**
 * @ngdoc function
 * @name missileManApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the missileManApp
 */
angular.module('missileManApp')
  .controller('MainCtrl',["$scope", "$state", function ($scope, $state) {
    $scope.find = function () {
      $state.go('college-search');
    };
  }]);
