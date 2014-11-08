var app = angular.module('guide_source');

app.controller('profileCtrl', function($scope, $location, profileRef, userService){

$scope.guider = profileRef;

console.log($scope.guider);

$scope.privateInfo = function(){
	if(!userService.currentUser()){
		// $location.path('/login');
		$scope.loggedIn = false;
	
	} else {
		$scope.loggedIn = true;

	}
}
$scope.privateInfo();

$scope.languages = $scope.guider.skills.languages;
$scope.car = $scope.guider.skills.ownCar

if($scope.guider.active){
	$scope.active = true;
} else{
	$scope.active = false;
}




$scope.addFave = function(){
	
	userService.addFave($scope.guider).then(function(){
		userService.getUserData().then(function(){
			$scope.message = "Guider was added, i like this person";
		});
	})
}




})
