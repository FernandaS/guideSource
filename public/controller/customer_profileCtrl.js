var app = angular.module('guide_source');

app.controller('customer_profileCtrl', function($scope, userService){
	$scope.user = userService.currentUser();
	
})