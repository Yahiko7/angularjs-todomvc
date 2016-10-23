(function (angular) {
	'use strict';

	var todoApp = angular.module('todoApp',[]);
	
	todoApp.controller('todoController',['$scope',function($scope){
		
		$scope.text = '';
		
		$scope.workList = [{
	      id: 0.123,
	      text: '学习',
	      completed: false
	    }, {
	      id: 0.22,
	      text: '睡觉',
	      completed: false
	    }, {
	      id: 0.232,
	      text: '打豆豆',
	      completed: true
	    },];
		
	}])
	
})(angular);
