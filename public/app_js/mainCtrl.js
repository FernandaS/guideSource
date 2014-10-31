var app = angular.module('guide_source');

app.controller('mainCtrl', function($scope, myService, $location){


	$scope.searchGuider = function(){
		myService.getGuiders($scope.guiderProperties)
		.then(function(response){
			$location.path('/guideList');

		})

		}
	
})