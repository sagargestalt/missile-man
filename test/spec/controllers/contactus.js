'use strict';

describe('Controller: ContactusctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('missileManApp'));

  var ContactusctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactusctrlCtrl = $controller('ContactusctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactusctrlCtrl.awesomeThings.length).toBe(3);
  });
});
