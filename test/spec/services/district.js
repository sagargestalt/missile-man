'use strict';

describe('Service: district', function () {

  // load the service's module
  beforeEach(module('missileManApp'));

  // instantiate service
  var district;
  beforeEach(inject(function (_district_) {
    district = _district_;
  }));

  it('should do something', function () {
    expect(!!district).toBe(true);
  });

});
