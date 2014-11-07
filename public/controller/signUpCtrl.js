var app = angular.module('guide_source');

app.controller('signUpCtrl', function($scope, myService, $location){


	$scope.fbLogin = function(){
		myService.fbLogin()
		.then(function(res){
			$location.path('/profile/' + res.name);
		})
	}


})

