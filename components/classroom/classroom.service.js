'use strict';

angular.module('exambuilderApp')
  .factory('ClassRoom', function ClassRoom($location, $rootScope, $http, User, $cookieStore, $q, TeacherClassroom) {

    return {

      createClassRoom: function(classRoom, callback) {
       
        return  $http.post('/api/classrooms/', classRoom);
       /* var cb = callback || angular.noop;

        return ClassRoom.save(classRoom,
          function(data) {
           // $cookieStore.put('token', data.token);
          //  currentUser = User.get();
            return cb(classRoom);
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

      deleteClassRoom: function(classRoom, callback) {
        return $http.delete('/api/classrooms/'+classRoom._id);
      },
      getClassRooms: function(){
       // var cb = callback || angular.noop;
        return $http.get('/api/classrooms');/*.success(function(awesomeThings) {
          console.log(awesomeThings);
          return awesomeThings;     
        });*/
      }
    };
  });
