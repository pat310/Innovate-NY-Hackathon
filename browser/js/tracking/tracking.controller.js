'use strict';
angular.module('InnovateNYP')
.controller('TrackingCtrl', function($scope, Tracking){
	$scope.imageSource = "../../assets/babyrotate.jpg";
  var img = document.getElementById('img');
	var div = document.querySelector('.image-container');
  img.onload = function(){
  	Tracking.determineBody(img, div);
  	Tracking.determineMarker(img, div);
  };
});