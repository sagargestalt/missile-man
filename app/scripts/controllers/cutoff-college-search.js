'use strict';

/**
 * @ngdoc function
 * @name missileManApp.controller:CutoffCollegeSearchCtrl
 * @description
 * # CutoffCollegeSearchCtrl
 * Controller of the missileManApp
 */
angular.module('missileManApp')
  .controller('CutoffCollegeSearchCtrl',
  ['$stateParams','$scope','csDistrict','collegeSearch','csCutoff', '$state','dataContainer',
  function ($stateParams, $scope, csDistrict, collegeSearch, csCutoff, $state, dataContainer) {
    var init,
        resetAll;

    resetAll = function () {
      $scope.collegeSearch.seatType = "";
      $scope.collegeSearch.category = "";
      $scope.collegeSearch.gender = "";
      $scope.collegeSearch.distType = "";
      $scope.collegeSearch.collegeId = "";


      $scope.metadata.seatTypes = [];
      $scope.metadata.categories = [];
      $scope.metadata.genders = [];
    };

    init = function () {
      $scope.stream = $stateParams.stream;

      $scope.collegeSearch = {};
      $scope.collegeSearch.district = "";

      // polytechnic Metadata

      $scope.metadata = {};
      resetAll();
      $scope.metadata.distTypes = [{
        key: 'H',
        value: 'Home District',
      },{
        key: 'O',
        value: 'Other District',
      }];

      csDistrict.get( function(argument) {
        $scope.metadata.districts = argument.data;
      });

    };

    $scope.loadCollege = function() {
      resetAll();
      collegeSearch.search().get({
        course: 'Post S.S.C. Diploma in Engineering (Polytechnics)',
        stream: 'Polytechnic',
        district: $scope.collegeSearch.district
      }, function( resp ) {
        $scope.metadata.collegeList = resp.data;
      });
    };

    $scope.loadCutoffDetails = function() {
      csCutoff.get({
        course: 'Post S.S.C. Diploma in Engineering (Polytechnics)',
        stream: 'Polytechnic',
        district: $scope.collegeSearch.district,
        id: $scope.collegeSearch.collegeId
      }, function( resp ) {
        $scope.metadata.seatTypes = resp.data.seatType;
        $scope.metadata.categories = resp.data.category;
        $scope.metadata.genders = resp.data.gender;
      });
    };

    $scope.submit = function() {
      console.log( $scope.collegeSearch );

      var criteria = $scope.collegeSearch.seatType;
      criteria += $scope.collegeSearch.gender;
      criteria += $scope.collegeSearch.category;
      criteria += $scope.collegeSearch.distType;
      dataContainer.cutoffCollege = {};
      dataContainer.cutoffCollege.criteria = criteria;
      dataContainer.cutoffCollege.collegeId = $scope.collegeSearch.collegeId;
      dataContainer.cutoffCollege.collegeSearch = $scope.collegeSearch;
      $state.go('cutoff-college-result');
    };

    init();

  }]);
