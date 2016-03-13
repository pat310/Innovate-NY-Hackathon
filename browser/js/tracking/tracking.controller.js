'use strict';
angular.module('InnovateNYP')
.controller('TrackingCtrl', function($scope, Tracking){
	$scope.initUpload = function(){
		$scope.showLoader = true;
		var reader = new FileReader();
    var fileInput = document.getElementById("file_input");

    if(fileInput){
    	fileInput.onchange = function(evt){
    		reader.readAsDataURL(this.files[0]);
    	};

     	reader.onload = function (e) {
        $scope.imageSource = e.target.result;
        $scope.$digest();
        loadPicture();
      };
    }
  };

	function loadPicture(){
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
	}
	
});