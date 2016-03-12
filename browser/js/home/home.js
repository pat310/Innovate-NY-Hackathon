'use strict';

angular.module('InnovateNYP')
.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/home/home.html',
    controller: 'HomeCtrl'
  });
});

app.controller('HomeCtrl', function ($scope, $state) {

	$scope.submitMetric = function(metric, value){
		// use conversion factory
		$state.go("categories")
	}	

	$scope.getWeightMetric = function(){
		return $scope.isUS ? "lbs" : "kgs"
	}
});
