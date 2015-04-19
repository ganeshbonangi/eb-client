'use strict';

angular.module('exambuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('student', {
        url: '/student',
        templateUrl: 'app/student/student.html',
        controller: 'StudentCtrl'
      });
  });