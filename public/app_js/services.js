var app = angular.module('guide_source');

app.service('myService', function($http, $q){

this.getGuiders = function(search){
	console.log(search)
	return $http({
		method: 'GET',
		url: 'http://localhost:3333/guiders/search/' + search,
	}).then(function(result){
		return result.data
	})
}
	
this.getGuiderById = function(id){
	return $http({
		method: 'GET',
		url: 'http://localhost:3333/guiders/' + id	
	}).then(function(result){
			return result.data
	});
};

});

app.service('userService', function($http, $q){
	var _currentUser;

	this.getUserData = function(){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: '/api/profile'
		}).then(function(response){
			_currentUser = response.data;
            deferred.resolve(_currentUser);
		});
		return deferred.promise;
	}; 

	this.currentUser = function(){
		return _currentUser;
	}


});