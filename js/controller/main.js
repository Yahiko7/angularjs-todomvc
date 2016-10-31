(function(angular){
	'use strict'
	var controllers = angular.module('app.controllers.main', ['app.services.main']);
	
	controllers.controller('todoController',['$scope','$routeParams','MainService',function($scope,$routeParams,MainService){
		
		$scope.text = '';
		
		$scope.workList = MainService.get();
		
		$scope.add = function(){
			if (!$scope.text) {
				return;
			}
			MainService.add($scope.text);
			$scope.text = '';
		}
		
		$scope.remove = MainService.remove;
		
		$scope.clear = function(){
			
			var newTodos = MainService.clearCompleted();
			
			$scope.workList = newTodos;
		};
		
		$scope.toggle = function() {
	        MainService.save();
	    };
	    
		$scope.exitCompleted = MainService.exitCompleted;
		
		$scope.currentEditingId = -1;
		
		$scope.editing = function(id){
			
			$scope.currentEditingId = id;	
		}
		
		$scope.save = function(){
			$scope.currentEditingId = -1;
		}
		
		$scope.checkAll = true;
		
		$scope.toggleAll = MainService.toggleAll;
		
		$scope.selector = {};
		$scope.status = $routeParams.status;
		
		$scope.$watch('status',function(now,old){
			switch (now){
				case 'active':
					$scope.selector = {completed:false};			
					break;
				case 'completed':
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
	
	
})(angular)
