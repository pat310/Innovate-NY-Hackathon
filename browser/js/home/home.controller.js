app.controller('HomeCtrl', function ($scope, $state) {

	$scope.submitMetric = function(metric, value){
		$state.go("categories")
	}	

	$scope.getWeightMetric = function(){
		return $scope.isUS ? "lbs" : "kgs"
	}
});
