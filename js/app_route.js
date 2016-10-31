//路由方式，效率低，但是灵活
(function (angular) {
	'use strict';

	var todoApp = angular.module('todoApp',['ngRoute','app.controllers.main']);
	
	todoApp.config(['$routeProvider', function($routeProvider) {
   	$routeProvider
      .when('/:status?', {
        controller: 'todoController',
        templateUrl: 'main_tmpl'
      })
      .otherwise({ redirectTo: '/' });
  	}]);
	
})(angular);
	