'use strict';
angular.module('InnovateNYP')
.controller('CalibrateCtrl', function($scope, Calibrate){

  $scope.selectPicture = true;
  var image = new Image();
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  $scope.loadPicture = function(){

    $scope.showLoader = true;

    image.src = '../../assets/creditcard.png';


    image.onload = function(){
      $scope.selectPicture = false;
      $scope.showLoader = false;
      $scope.$digest();

      canvas.width = image.width;
      canvas.height = image.height;
      
      context.drawImage(image, 0, 0, image.width, image.height);


    };
  };

  $scope.colorSelected = function(evt){
    var data = context.getImageData(evt.offsetX, evt.offsetY,1,1).data;
    $scope.backgroundColor = {'background-color':`rgb(${data[0]}, ${data[1]}, ${data[2]})`};
  };

  $scope.analyzeAutomatically = function(){  
    $scope.showLoader = true;

    var image = new Image();
    image.src = '../../assets/creditcard.png';

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    image.onload = function(){
      canvas.width = image.width;
      canvas.height = image.height;
    	
      context.drawImage(image, 0, 0, image.width, image.height);

      Calibrate.calcAverageColor(context, image.width, image.height, 4)
      .then(function(averages){
        $scope.showLoader = false;
        $scope.$digest();
        console.log('averages', averages);
        $scope.backgroundColor = {'background-color':`rgb(${averages.r}, ${averages.g}, ${averages.b})`};
      });
    };
  };
  
});