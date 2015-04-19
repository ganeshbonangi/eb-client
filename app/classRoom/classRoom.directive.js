'use strict';

angular.module('exambuilderApp')
  .directive('classRoom', function () {
    return {
      replace:true,
      restrict: 'EA',
      templateUrl: 'app/classRoom/classRoom.html',
      link: function (scope, element, attrs) {
        if(attrs.classobject)
        {
          scope.classRoom = JSON.parse(attrs.classobject);
          scope.updateClassRoomVar = true;
        }else{
          scope.classRoom = {
              'name': '',
              'students': [],
              'startDate': '',
              'endDate': ''
          };
        }
        
      },
      controller: function($scope,$element,$attrs,ClassRoom){
      	$scope.classRoom = {};
        $scope.format = "dd-MMM-yyyy";
  /*      $scope.classRoom = {
        "name": "ClassRoom21344",
        "startDate": "2015-04-05T16:53:42.000Z",
        "endDate": "2016-04-05T16:53:42.000Z",
        "students": [
            "std211111133331",
            "std211112"
        ]
      }*/
        
        $scope.removingTheStudent = function(row){
          var index = row.$index;
          if (index !== -1) {
                $scope.classRoom.students.splice(index, 1);
          }
        };

        $scope.clear = function () {
          $scope.classRoom.startDate = null;
          $scope.classRoom.endDate = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
          return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function() {
          $scope.minDate = $scope.minDate ? null : new Date();
        };

        $scope.ClassRoomOpen = function($event,popup) {
          $event.preventDefault();
          $event.stopPropagation();
          if(popup=='start'){
            $scope.classStartDateOpen = true;
          }else{
            $scope.classEndDateOpen = true;
          }
        };

        $scope.update = function() {
          var d = new Date();
          d.setHours( 14 );
          d.setMinutes( 0 );
          $scope.mytime = d;
        };

        $scope.clear = function() {
          $scope.mytime = null;
        };

        /*$scope.saveClassRoom = function(){
          var objectOfClassRoom = {};
          objectOfClassRoom.name = $scope.classRoom.name;
          objectOfClassRoom.startDate=$scope.classRoom.startDate;
          objectOfClassRoom.endDate=$scope.classRoom.endDate;
          objectOfClassRoom.students=$scope.classRoom.students;

          ClassRoom.createClassRoom($scope.classRoom).success(function(){
              console.log("successfully class room created");
          });
       };*/
       $scope.updateClassRoom= function(){
          var objectOfClassRoom = {};
          objectOfClassRoom.name = $scope.classRoom.name;
          objectOfClassRoom.startDate=$scope.classRoom.startDate;
          objectOfClassRoom.endDate=$scope.classRoom.endDate;
          objectOfClassRoom.students=$scope.classRoom.students;
       };
      }
    };
  });