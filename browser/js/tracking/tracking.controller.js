'use strict';
angular.module('InnovateNYP')
.controller('TrackingCtrl', function($scope, Tracking){
	$scope.loadPicture = function(){	
		$scope.showLoader = true;
		$scope.imageSource = "../../assets/babyrotate.jpg";
	  var img = document.getElementById('img');
		var div = document.querySelector('.image-container');


	  img.onload = function(){
			Tracking.determinePatientHeight(img, div)
			.then(function(height){
				$scope.showLoader = false;
	  		$scope.$digest();
	  		console.log('height', height);
			});
	  };
	};
	
});