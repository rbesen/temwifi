'use strict';

angular.module('temwifi.places', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/places', {
    templateUrl: 'places/list.html',
    controller: 'placesCtrl'
  });
}])

.controller('placesCtrl', ['$scope', function($scope) {

	var placesMockData = [];
	$scope.showDetail = -1;
	$scope.addingNew = false;

	$scope.init = function() {
		loadPlaces();
		$scope.places = placesMockData;
	};

	$scope.setDetail = function(id){
		if($scope.showDetail == id){
			$scope.showDetail = -1;
		}else{
			$scope.showDetail = id;
		}
		
	};

	$scope.setAddingNew = function(value){
		$scope.addingNew = value;
	}

	$scope.save = function(place){
		if(place.food){
			place.food = place.food.split(',');
		}
		if(place.drinks){
			place.drinks = place.drinks.split(',');
		}
		placesMockData.splice(0,0,place);
		$scope.setAddingNew(false);
	};

    //Load fake places
	function loadPlaces(){
		for(var i=0; i<10;i++){
			var place = {};
			place.id = i;
			place.name = 'Café '+(i+1);
			place.address = 'Avenida dos cafés, n '+(i+1)*23;
			place.internet = {speed: Math.floor((Math.random() * 10) + 1), name: 'cafe'+(i+1),password: Math.floor((Math.random() * 100000000))};
			place.food = ['lanches','saladas','pão'];
			place.drinks = ['café', 'cerveja', 'sucos', 'água'];
			place.service = Math.floor((Math.random() * 5) + 1);
			place.price = Math.floor((Math.random() * 5) + 1);
			place.noise = Math.floor((Math.random() * 5) + 1);
			place.confort = Math.floor((Math.random() * 5) + 1);
			place.rating = Math.floor((Math.random() * 5) + 1);
			placesMockData.push(place);
		}
	}

}]);