'use strict';

angular.module('exambuilderApp')
  .factory('Exam', function Exam($location, $rootScope, $http, User, $cookieStore, $q, TeacherClassroom) {

    return {

      createExam: function(exam, callback) {
        
        return  $http.post('/api/exams/', exam);
/*        var cb = callback || angular.noop;

        return Exam.save(exam,
          function(data) {
           // $cookieStore.put('token', data.token);
          //  currentUser = User.get();
            return cb(exam);
          },
          function(err) {
           // this.logout();
            return cb(err);
          }.bind(this)).$promise;*/
      },
      updateClassRoom: function(classRoom, callback) {
        var cb = callback || angular.noop;

        return ClassRoom.updateProfile(classRoom, function(classRoom) {
          return cb(classRoom);
        }, function(err) {
          return cb(err);
        }).$promise;
      },

      deleteExam: function(exam) {
        return $http.delete('/api/exams/'+exam._id);
      },
      getExams: function(){
       // var cb = callback || angular.noop;
        return $http.get('/api/exams');/*.success(function(awesomeThings) {
          console.log(awesomeThings);
          return awesomeThings;     
        });*/
      }
    };
  });
