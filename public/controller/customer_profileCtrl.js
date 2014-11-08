var app = angular.module('guide_source');

app.controller('customer_profileCtrl', function($scope, userService){
	

	var upDateUser = function(){
		userService.getUserData().then(function(user){
		$scope.user = user; 
		console.log($scope.user)

		})
	}
	
	upDateUser();

	$scope.removeFromFave = function(guider){
		userService.removeFromFave(guider).then(function(res){
			console.log(res);
			upDateUser();
			console.log($scope.user);
		});
	}
	
})