var app = angular.module('guide_source');

app.controller('customer_profileCtrl', function($scope, userService){
	$scope.user = userService.currentUser();
	console.log($scope.user)


	$scope.removeFromFave = function(guider){
		userService.removeFromFave(guider).then(function(res){
			console.log(res);
		});
	}
	
})