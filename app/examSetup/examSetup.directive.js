'use strict';

angular.module('exambuilderApp')
  .directive('examSetup', function () {
    return {
      templateUrl: 'app/examSetup/examSetup.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        if(attrs.examobject){
          scope.exam =  JSON.parse(attrs.examobject); 
          scope.upDateTheExamVar = true;
        }else{
            scope.exam = {
              'name': '',
              'students': [],
              'startDate': '',
              'endDate': '',
              'duration': '',
              'sections': [],
              'nagativeMarking': ''
            };
        }
       
      },
      controller: function($scope){
      	$scope.exam = {};
        $scope.exam.sections = [];
        $scope.exam.students = [];
        $scope.hstep = 1;
        $scope.mstep = 1;
        $scope.format = "dd-MMM-yyyy";
        $scope.removingTheSection = function(row){
          var index = row.$index;
          if (index !== -1) {
                $scope.exam.sections.splice(index, 1);
          }
        };      
         $scope.removingTheStudent = function(row){
          var index = row.$index;
          if (index !== -1) {
                $scope.exam.students.splice(index, 1);
          }
        };
        $scope.addingAnewSection = function(){
          $scope.exam.sections.push('');
        };       
         $scope.addingAnewStudent = function(){
          $scope.exam.students.push('');
        };

        $scope.clear = function () {
          $scope.exam.startDate = null;
          $scope.exam.endDate = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
          return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function() {
          $scope.minDate = $scope.minDate ? null : new Date();
        };

        $scope.open = function($event,popup) {
          $event.preventDefault();
          $event.stopPropagation();
          if(popup=='start'){
          $scope.startDateOpen = true;
          }else{
            $scope.endDateOpen = true;
          }    
        };

        $scope.toggleMode = function() {
          $scope.isStartMeridian = ! $scope.isStartMeridian;
          $scope.isEndMeridian = ! $scope.isEndMeridian;
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
        $scope.updateTheExam = function(){
          var objectOfExam = {};
          objectOfExam.examname = $scope.exam.name;
          objectOfExam.startDate=$scope.exam.startDate;
          objectOfExam.endDate=$scope.exam.endDate;
          objectOfExam.examTime = $scope.exam.timeOfExam;
          objectOfExam.negativemark=$scope.exam.nagativeMarking;
          objectOfExam.sections=$scope.exam.sections;
          console.log(objectOfExam)
        };
      }
    };
  });