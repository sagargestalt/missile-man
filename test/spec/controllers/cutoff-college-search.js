'use strict';

describe('Controller: CutoffCollegeSearchCtrl', function () {

  // load the controller's module
  beforeEach(module('missileManApp'));

  var CutoffCollegeSearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CutoffCollegeSearchCtrl = $controller('CutoffCollegeSearchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CutoffCollegeSearchCtrl.awesomeThings.length).toBe(3);
  });
});
