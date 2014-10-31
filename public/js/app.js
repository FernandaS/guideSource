var app = angular.module('guide_source', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
 
 $routeProvider
 	.when('/', {
 		templateUrl: 'views/home.html',
 		controller: 'mainCtrl'
 	})
 	.when('/profile', {
 		templateUrl: 'views/profile.html',
 		controller: 'profileCtrl'
 	})
 	.otherwise({
		redirectTo: '/'
	});
}]);