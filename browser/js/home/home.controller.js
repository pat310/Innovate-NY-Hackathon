app.controller('HomeCtrl', function ($scope, $state) {
  $scope.isUs = 'SI';

  $scope.toggleUnits = function(value){
    $scope.isUs = value;
  }

	$scope.submitMetric = function(metric, value){
		$state.go("categories")
	}	

	$scope.getWeightMetric = function(){
		return $scope.isUS ? "lbs" : "kgs"
	}
});


