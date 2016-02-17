'use strict';

/**
 * @ngdoc function
 * @name missileManApp.controller:CollegeDetailCtrl
 * @description
 * # CollegeDetailCtrl
 * Controller of the missileManApp
 */
angular.module('missileManApp')
  .controller('CollegeDetailCtrl',['collegeDetails', '$scope',
  function (collegeDetails, $scope) {
    var init,
        addSlide,
        paths;

    init = function() {
      // console.log( collegeDetails );
      collegeDetails.$promise.then( function() {
        $scope.collegeDetail = collegeDetails.data[0];
      } );

      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.slides = [];

      addSlide = function(path) {
        $scope.slides.push({
          image: path,
          text: 'College Picture'
        });
      };
      paths = [
        '/images/college/img1.jpg',
        '/images/college/img2.jpg',
        '/images/college/img3.jpg'
      ];

      for (var i=0; i<3; i++) {
        addSlide( paths[i] );
      }
    };

    init();
  }]);
