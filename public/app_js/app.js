var app = angular.module('guide_source', ['ngRoute', 'ngResource']);


app.config(['$routeProvider', function($routeProvider){

 $routeProvider
 	.when('/', {
 		templateUrl: 'views/home.html',
 		controller: 'mainCtrl',
 		resolve: {
 			areas: function(myService){
 				return myService.getAreas();
 			}
 		}
 	})
 	.when('/profile', {
 		templateUrl: 'views/profile.html',
 		controller: 'profileCtrl'
 	})
 	.when('/guideList/:area',{
 		templateUrl: 'views/guides_list.html',
 		controller: 'guides_listCtrl',
 		resolve: {
 			guideList: function(myService, $route){
 				return myService.getGuiders($route.current.params.area);
 			}
 		}
 	})
 	.when('/login',{
 		templateUrl: 'views/signUp.html',
 		controller: 'signUpCtrl'
 	})
 	.when('/profile/:guiderId',{
 		templateUrl: 'views/profile.html',
 		controller: 'profileCtrl',
 		resolve: {
 			profileRef: function(myService, $route){
 				return myService.getGuiderById($route.current.params.guiderId);
 				
 			}
 		}
 	})
 	.when('/customer',{
 		templateUrl: 'views/customer_profile.html',
 		controller: 'customer_profileCtrl',
 		resolve: {
 			customerRef: function(userService){
 				return userService.getUserData();
 			} 
 		}
 	})
 	.otherwise({
		redirectTo: '/'
	});
}]);


// app.config(function($httpProvider) {
//   $httpProvider.interceptors.push(function($q, $location) {
//     return {
//       'responseError': function(rejection) {
//         if (rejection.status === 401) {
//           $location.path('/login');
//         }
//         return $q.reject(rejection);
//       }
//     }
//   })
// })