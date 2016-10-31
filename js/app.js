//$location方式，效率高
(function (angular) {
	'use strict';

	var todoApp = angular.module('todoApp',[]);
	
	todoApp.controller('todoController',['$scope','$location',function($scope,$location){
		
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
			if (!$scope.text) {
				return;
			}
			$scope.workList.push(
				{
			      id: $scope.getId(),
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
		
		$scope.getId = function(){
			var id = Math.random();
			for (var i = 0 ; i < $scope.workList.length; i++) {
				
				if (id == $scope.workList[i].id) {
					id = $scope.getId();
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
		
		$scope.currentEditingId = -1;
		
		$scope.editing = function(id){
			
			$scope.currentEditingId = id;	
		}
		
		$scope.save = function(){
			$scope.currentEditingId = -1;
		}
		
		$scope.checkAll = true;
		
		$scope.toggleAll = function(){
			
			for (var i = 0; i < $scope.workList.length; i++) {
				$scope.workList[i].completed = $scope.checkAll;
			}	
			$scope.checkAll = !$scope.checkAll;
			
		}
		
		$scope.selector = {};
		$scope.$location = $location;
		
		$scope.$watch('$location.path()',function(now,old){
			switch (now){
				case '/active':
					$scope.selector = {completed:false};			
					break;
				case '/completed':
					$scope.selector = {completed:true};	
					break;
				default:
					$scope.selector = {};	
					break;
			}
		})
		
		$scope.equalCompare = function(source,target){
		
			return source === target;
		}
		
	}])
	
})(angular);
