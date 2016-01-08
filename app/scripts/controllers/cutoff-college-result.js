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

  $scope.printDiv = function() {
  var printContents = document.getElementById('printable').innerHTML;
  var popupWin = window.open('', '_blank', 'width=300,height=300');
  popupWin.document.open();
  popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</html>');
  popupWin.document.close();
};

  }]);
