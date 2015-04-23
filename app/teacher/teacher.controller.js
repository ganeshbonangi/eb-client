'use strict';

angular.module('exambuilderApp')
  .controller('TeacherCtrl', function ($scope, $http, Auth, User, ClassRoom,Exam,$modal) {
    $scope.addClassRoom = function(){
      
    }
    /*ClassRoom.getClassRooms().success(function(classRooms){
		$scope.classRoomObjectData =classRooms;
	});

	Exam.getExams().success(function(exams){
		$scope.examSetupObject =exams;
	});*/
	$scope.deleteClassRoom = function(event,classObject){
    event.stopPropagation();
		ClassRoom.deleteClassRoom(classObject).success(function(){
			angular.forEach($scope.classRoomObjectData, function(u, i) {
		        if (u === classObject) {
		          $scope.classRoomObjectData.splice(i, 1);
		        }
	      	});
		});
	};

	$scope.deleteExam = function(event,examObject){
    event.stopPropagation();
		Exam.deleteExam(examObject).success(function(){
			console.log("deleted success fully....");
			 angular.forEach($scope.examSetupObject, function(u, i) {
			        if (u === examObject) {
			          $scope.examSetupObject.splice(i, 1);
			        }
		    });
		});
	}
	$scope.addNewExam = function(size){
     	var modalInstance = $modal.open({
          template: '<div class="modal-header"><h1 style="text-align:center;">CREATING A NEW EXAM</h1></div><div class="modal-body"><exam-setup></exam-setup></div><div class="modal-footer"> <button class="btn btn-success"  ng-click="saveTheExam()">Save Exam</button><button class="btn btn-danger"  ng-click="cancel()">Cancel</button></div>',
           controller:'ExamModalInstanceCtrl',
          size: size,
          resolve: {
            user: null
          }
        });
        modalInstance.result.then(function (newexam) {
            //$scope.users = User.query();//$scope.users.push(newUser);
        Exam.createExam(newexam).success(function(){
          //$scope.examSetupObject =exams;
          $scope.init();
          console.log("successfully exam created");
        });
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
	};


	$scope.addNewClass = function(size){
     	var modalInstance = $modal.open({
          template: '<div class="modal-header"><h1 style="text-align:center;">CREATING A NEW CLASS ROOM</h1></div><div class="modal-body"><class-room></class-room></div><div class="modal-footer"> <button class="btn btn-success"  ng-click="saveClassRoom()">Save this class room</button><button class="btn btn-danger"  ng-click="cancel()">Cancel</button></div>',
          controller:'ClassRoomModalInstanceCtrl',
          size: size,
          resolve: {
            user: null
          }
        });
        modalInstance.result.then(function (newclass) {
            //$scope.users = User.query();//$scope.users.push(newUser);
        ClassRoom.createClassRoom(newclass).success(function(){
              $scope.init();
              console.log("successfully class room created");
        });
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
	};

    $scope.init = function(){
      ClassRoom.getClassRooms().success(function(classRooms){
      $scope.classRoomObjectData =classRooms;
    });
    Exam.getExams().success(function(exams){
      $scope.examSetupObject =exams;
    });
  }
  $scope.init();
  });
angular.module('exambuilderApp').controller('ClassRoomModalInstanceCtrl', function ($scope, $modalInstance) {

  //$scope.classRoom = classRoom;


  $scope.saveClassRoom = function(){
          $modalInstance.close($scope.classRoom);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

angular.module('exambuilderApp').controller('ExamModalInstanceCtrl', function ($scope, $modalInstance) {

  //$scope.classRoom = classRoom;

  $scope.saveTheExam = function(){
          $modalInstance.close($scope.exam);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});