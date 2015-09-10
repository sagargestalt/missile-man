'use strict';

describe('Service: dataContainer', function () {

  // load the service's module
  beforeEach(module('missileManApp'));

  // instantiate service
  var dataContainer;
  beforeEach(inject(function (_dataContainer_) {
    dataContainer = _dataContainer_;
  }));

  it('should do something', function () {
    expect(!!dataContainer).toBe(true);
  });

});
