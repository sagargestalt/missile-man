'use strict';

describe('Service: csCutoff', function () {

  // load the service's module
  beforeEach(module('missileManApp'));

  // instantiate service
  var csCutoff;
  beforeEach(inject(function (_csCutoff_) {
    csCutoff = _csCutoff_;
  }));

  it('should do something', function () {
    expect(!!csCutoff).toBe(true);
  });

});
