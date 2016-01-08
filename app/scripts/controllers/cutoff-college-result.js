'use strict';

/**
 * @ngdoc function
 * @name missileManApp.controller:CutoffCollegeResultCtrl
 * @description
 * # CutoffCollegeResultCtrl
 * Controller of the missileManApp
 */
angular.module('missileManApp')
  .controller('CutoffCollegeResultCtrl',['collegeResult', '$scope',
  function (collegeResult, $scope) {
    var init;

    init = function() {
      collegeResult.$promise.then( function( resp ) {
        $scope.resultList = resp.data;
      });
    };

    init();
  }]);
