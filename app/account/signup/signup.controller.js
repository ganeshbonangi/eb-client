'use strict';

angular.module('exambuilderApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window) {

    $scope.init = function() {
      $scope.user = {};
      $scope.user.role = 'student';
      $scope.errors = {};      
    };
    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          mobile: $scope.user.mobile,
          role: $scope.user.role,
          inst: $scope.user.inst
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

    $scope.init();
  });
