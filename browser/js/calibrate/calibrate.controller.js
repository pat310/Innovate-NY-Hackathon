'use strict';
angular.module('InnovateNYP')
.controller('CalibrateCtrl', function($scope, calibrationImage, Calibrate){

  $scope.source = '../../assets/creditcard.png';
  var image = document.getElementById('img');

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  image.onload = function(){
    canvas.width = image.width;
    canvas.height = image.height;
  	
    context.drawImage(image, 0, 0, image.width, image.height);

    $scope.averageColor = Calibrate.calcAverageColor(context, image.width, image.height, 4);
  };
  
});