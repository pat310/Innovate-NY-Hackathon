app.controller('HomeCtrl', function ($scope, $state) {
  $scope.isUs = 'SI';

  $scope.toggleUnits = function(value){
    $scope.isUs = value;
  }

	$scope.submitMetric = function(metric, value){
		$state.go("medications", {value: value});
	}	

	$scope.getWeightMetric = function(){
    if($scope.isUs === 'US') return 'lbs';
    else return 'kgs';
	}
});


