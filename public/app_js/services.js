var app = angular.module('guide_source');

app.service('myService', function($http, $q){

this.getGuiders = function(area){
	
	return $http({
		method: 'GET',
		url: 'http://localhost:3333/guiders/' + area
	}).then(function(result){
		return result.data
	})
}
	
this.getGuiderById = function(id){
	return $http({
		method: 'GET',
		url: 'http://localhost:3333/guider/' + id	
	}).then(function(result){
			return result.data
	});
};

this.getAreas = function(){
	return $http({
		method: 'GET',
		url: '/areas'
	}).then(function(result){
		return result.data
	})
}



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

	this.LogoutCustomer = function(){
		_currentUser = '';
		return $http({
			method: 'GET',
			url: '/logout'
		})
	}

	this.addFave = function(guider){
		return $http({
			method: "POST",
			url: '/api/addFave',
			data: {guider: guider, customer: _currentUser}
		})
	}

	this.removeFromFave = function(fave){
		return $http({
			method: "DELETE",
			url: "/api/faveGuider/" + _currentUser._id + '/' + fave._id
		})
	}

});