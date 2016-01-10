'use strict';

describe('Service: contactUs', function () {

  // load the service's module
  beforeEach(module('missileManApp'));

  // instantiate service
  var contactUs;
  beforeEach(inject(function (_contactUs_) {
    contactUs = _contactUs_;
  }));

  it('should do something', function () {
    expect(!!contactUs).toBe(true);
  });

});
