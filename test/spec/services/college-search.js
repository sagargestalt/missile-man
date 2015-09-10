'use strict';

describe('Service: collegeSearch', function () {

  // load the service's module
  beforeEach(module('missileManApp'));

  // instantiate service
  var collegeSearch;
  beforeEach(inject(function (_collegeSearch_) {
    collegeSearch = _collegeSearch_;
  }));

  it('should do something', function () {
    expect(!!collegeSearch).toBe(true);
  });

});
