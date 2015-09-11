'use strict';

/**
 * @ngdoc function
 * @name missileManApp.controller:CollegeSearchCtrl
 * @description
 * # CollegeSearchCtrl
 * Controller of the missileManApp
 */
angular.module('missileManApp')
  .controller('CollegeSearchCtrl',['collegeResult','$scope', function (collegeResult, $scope) {
    var init;

    init = function() {
      collegeResult.$promise.then( function() {
        $scope.collegeList = collegeResult.data;
      } );
    };

    init();
  }]);
