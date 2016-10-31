(function(angular){
	'use strict'
	angular.module('app.services.main', [])
    .service('MainService', ['$window', function($window) {
		var storage = $window.localStorage;
		var workList = storage['my_todo_list'] ? JSON.parse(storage['my_todo_list']) : [];
	   
		function getId(){
			var id = Math.random();
			for (var i = 0 ; i < workList.length; i++) {
				if (id == workList[i].id) {
					id = getId();
				}
			}
			return id;
		};
		
		this.save = function() {
	        storage['my_todo_list'] = JSON.stringify(workList);
	   	};
	   	
		this.add = function(text){
			workList.push(
				{
			      id: getId(),
			      text: text,
			      completed: false
			    }
			);
			this.save();
		};
		
		this.remove = function(id){
			for (var i = 0; i < workList.length; i++) {
				if (id === workList[i].id) {
					workList.splice(i,1);
					break;
				}
			};
			this.save();
		};
		
		this.clearCompleted = function(){
			var result = [];
			
			for (var i = 0; i < workList.length; i++ ) {
				if (!workList[i].completed) {
					result.push(workList[i]);
				}
			}
			workList = result;
			this.save();
			return workList;
		};
		
		this.exitCompleted = function(){
			for (var i = 0; i < workList.length; i++) {
				if (workList[i].complete) {
					return false;
				}
			}
			return true;
		};
		
		var checkAll = true;
		
		this.toggleAll = function(){
			for (var i = 0; i < workList.length; i++) {
				workList[i].completed = checkAll;
			}	
			checkAll = !checkAll;
			this.save();
		};
		
		this.get = function() {
	        return workList;
	    };
	    
	}])
})(angular)
