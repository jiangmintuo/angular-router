	var app = angular.module('myApp',['ngRoute']);
	app.config(['$routeProvider',function($routeProvider) {
		$routeProvider.
		when('/user',{templateUrl:'templates/user.html',controller:'userController'}).
		when('/user/:name',{templateUrl:'templates/userName.html',controller:'userNameController'}).
		otherwise({redirectTo:'/user'});
	}]);
	app.controller('userController', ['$scope', function($scope){
		var users = ['tom','lewis','alisa','joe'];
		$scope.users = users;
	}]);
	app.controller('userNameController', ['$scope','$routeParams',function($scope,$routeParams){
		var name = $routeParams.name;
		var users = [
           {name:'tom',tel:13333333333,age:18,sex:'man'},
           {name:'lewis',tel:17777777777,age:29,sex:'woman'},
           {name:'alisa',tel:15555555555,age:25,sex:'man'},
           {name:'joe',tel:18888888888,age:22,sex:'woman'}
		];
		var userDetail;
		users.forEach(function(item,i,context){
			if(item.name == name){
				userDetail = item;
				return;
			}
		});
		$scope.user = userDetail;
	}]);