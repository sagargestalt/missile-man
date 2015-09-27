'use strict';

describe('Controller: CutoffCollegeResultCtrl', function () {

  // load the controller's module
  beforeEach(module('missileManApp'));

  var CutoffCollegeResultCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CutoffCollegeResultCtrl = $controller('CutoffCollegeResultCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CutoffCollegeResultCtrl.awesomeThings.length).toBe(3);
  });
});
