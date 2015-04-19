'use strict';

angular.module('exambuilderApp')
  .factory('TeacherClassroom', function ($resource) {
    return $resource('/api/classrooms/:id/:controller', {
      id: '@_id'
    },
    {
      delete: {
        method: 'DELETE',
        params: {

        }
      },
      get: {
        method: 'GET',
        params: {

        }
      },
      updateClassRoom: {
        method: 'PUT',
        params: {

        }
      },
      create: {
        method: 'POST',
        params: {

        }
      }
    });
  });
