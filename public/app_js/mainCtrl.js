var app = angular.module('guide_source');

app.controller('mainCtrl', function($scope, myService, $location, areas){


	$scope.searchGuider = function(){
		var searchParam;
		if(!$scope.guiderProperties) {
			searchParam = 'all';
		} else {
			searchParam = $scope.guiderProperties.name;
		}
		$location.path('/guideList/' + searchParam);

		
		console.log($scope.guiderProperties)

		}

	$scope.areas = areas;
	console.log(areas);
	
	
})