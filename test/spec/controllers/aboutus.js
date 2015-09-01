'use strict';

describe('Controller: AboutusctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('missileManApp'));

  var AboutusctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutusctrlCtrl = $controller('AboutusctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutusctrlCtrl.awesomeThings.length).toBe(3);
  });
});
