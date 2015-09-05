'use strict';

describe('Controller: AuthoriseCtrl', function () {

  // load the controller's module
  beforeEach(module('missileManApp'));

  var AuthoriseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthoriseCtrl = $controller('AuthoriseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AuthoriseCtrl.awesomeThings.length).toBe(3);
  });
});
