(function (angular) {
	'use strict';

	var todoApp = angular.module('todoApp',[]);
	
	
	todoApp.controller('todoController',['$scope',function($scope){
		
		$scope.text = '';
		
		$scope.workList = [{
	      id: 0.001,
	      text: '学习',
	      completed: false
	    }, {
	      id: 0.02582,
	      text: '睡觉',
	      completed: false
	    }, {
	      id: 0.64843,
	      text: '打豆豆',
	      completed: true
	    },];
		
		$scope.add = function(){
			$scope.workList.push(
				{
			      id: getId(),
			      text: $scope.text,
			      completed: false
			    }
			)
			$scope.text = '';
		}
		
		$scope.remove = function(id){
			
			for (var i = 0; i < $scope.workList.length; i++) {
				
				if (id === $scope.workList[i].id) {
					$scope.workList.splice(i,1);
					break;
				}
			}
		}
		
		function getId(){
			var id = Math.random();
			for (var i = 0 ; i < $scope.workList.length; i++) {
				
				if (id == $scope.workList[i].id) {
					id = getId();
				}
			}
			return id;
		}
		
		$scope.clear = function(){
			var result = [];
			
			for (var i = 0; i < $scope.workList.length; i++ ) {
				if (!$scope.workList[i].completed) {
					result.push($scope.workList[i]);
				}
			}
			
			$scope.workList = result;
			
		}
		
		$scope.exitCompleted = function(){
			
			for (var i = 0; i < $scope.workList.length; i++) {
				if ($scope.workList[i].complete) {
					return false;
				}
			}
			
			return true;
		}
		
	}])
	
	
})(angular);
