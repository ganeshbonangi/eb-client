'use strict';

describe('Directive: examSetup', function () {

  // load the directive's module and view
  beforeEach(module('ebApp'));
  beforeEach(module('app/examSetup/examSetup.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<exam-setup></exam-setup>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the examSetup directive');
  }));
});