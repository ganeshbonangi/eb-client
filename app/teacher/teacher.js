'use strict';

angular.module('exambuilderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacher', {
        url: '/teacher',
        templateUrl: 'app/teacher/teacher.html',
        controller: 'TeacherCtrl'
      });
  });