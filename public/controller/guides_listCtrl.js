var app = angular.module('guide_source');

app.controller('guides_listCtrl', function($scope, myService, $location, guideList){

	// var getServiceGuiders = function(){
	// 	myService.getGuiders()
	// 	.then(function(data){
	// 	$scope.guiders = data;
	// 	});
	// }
	// getServiceGuiders();

	$scope.guiders = guideList


	$scope.viewGuider = function(guider){
		$location.path('/profile/' + guider._id);
	};
});
