'use strict';

describe('Controller: CollegeDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('missileManApp'));

  var CollegeDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollegeDetailCtrl = $controller('CollegeDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CollegeDetailCtrl.awesomeThings.length).toBe(3);
  });
});
