'use strict';
angular.module('InnovateNYP')
.controller('TrackingCtrl', function($scope, Tracking, $mdDialog, Calculation, $state){
	
	$scope.showAlert = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Place your measuring device in the picture')
        .textContent('Without it we can\'t calibrate the image')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(startCamera())
    );
  };

	var stream;
  function startCamera(){	
  	$scope.hide = false;
		var video = document.getElementById('MediaStreamVideo');

		navigator.webkitGetUserMedia(
			{video: true, audio: true}, // Options
			function(localMediaStream) { // Success
				stream = localMediaStream;
				video.src = window.webkitURL.createObjectURL(stream);
			},
			function(err) { // Failure
				alert('getUserMedia failed: Code ' + err.code);
			}
		);
  }

  function stopCamera(){
  	$scope.hide = true;
  }

	$scope.initUpload = function(){
		stopCamera();
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
	  var img = document.getElementById('img');
		var div = document.querySelector('.image-container');

	  img.onload = function(){
			Tracking.determinePatientHeight(img, div)
			.then(function(height){
				$scope.showLoader = false;
	  		$scope.$digest();
	  		Calculation.height = height;			  
	  		var weight = Math.round(Calculation.heightToWeight());
	  		var weightEnglish = Math.round(weight * 2.2);

				(function(ev) {
				  var confirm = $mdDialog.confirm()
				        .title(`Patient's weight estimated at ${weight}kg (${weightEnglish}lb)`)
				        .textContent('Is the weight acceptable?')
				        .ariaLabel('Lucky day')
				        .targetEvent(ev)
				        .ok('Yes')
				        .cancel('No, retake');
				  $mdDialog.show(confirm).then(function() {
				    $state.go('medications');
				  }, function() {
				  	$state.go('tracking');
				  });
				})();
			});
	  };
	}
	
});