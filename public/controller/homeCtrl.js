
var app = angular.module('guide_source');

app.controller('homeCtrl', function($scope, myService, $location, areas){


	$scope.searchGuider = function(){
		var searchParam;
		if(!$scope.guiderProperties) {
			searchParam = 'all';
		} else {
			searchParam = $scope.guiderProperties.name;
		}
		$location.path('/guideList/' + searchParam);

		
		

		}

	// $scope.takeMeHome = function(){
	// 	$location.path('/')
	// }

	$scope.areas = areas;
	
	
	
})