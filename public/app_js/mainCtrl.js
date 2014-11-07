var app = angular.module('guide_source');

app.controller('mainCtrl', function($scope, userService, $location){



$scope.$watch(userService.currentUser, function(){
	$scope.user = userService.currentUser();
})

$scope.logOut = function(){
	userService.LogoutCustomer()
	.then(function(){
		$location.path('/')
		$scope.user = null;						
	})
}

});
