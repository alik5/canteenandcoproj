'use strict';

describe('Controller: OrderformCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardAppApp'));

  var OrderformCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderformCtrl = $controller('OrderformCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
