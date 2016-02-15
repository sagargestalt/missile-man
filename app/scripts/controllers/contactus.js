'use strict';

/**
 * @ngdoc function
 * @name missileManApp.controller:ContactusctrlCtrl
 * @description
 * # ContactusctrlCtrl
 * Controller of the missileManApp
 */
angular.module('missileManApp').controller('ContactUsCtrl',['$scope','contactUs',
	 function ($scope, contactUs) {
		var init;

		init = function() {
			$scope.isSubmitted = false;
		};

    $scope.add = function() {

      var data = {
        firstname:  $scope.fname,
        lastname: $scope.lname,
        companyname: $scope.cname,
        emailaddress: $scope.email,
        msg: $scope.message
      };
      contactUs.save(angular.toJson(data), function() {
				$scope.isSubmitted = true;
      });
    };
  }]);
