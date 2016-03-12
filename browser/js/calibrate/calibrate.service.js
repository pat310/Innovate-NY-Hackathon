'use strict';

angular.module('InnovateNYP')
.factory('Calibrate', function($http){
	var Calibrate = {};

	Calibrate.fetchImage = function(){
		return 'https://s3.amazonaws.com/rapgenius/1371963360_china-merchants-bank-unionpay-credit-card-visa-ctrip.jpg';
	};

	Calibrate.calcAverageColor = function(context, width, height, threshold){
    tracking.Fast.THRESHOLD = threshold;

    var imageData = context.getImageData(0, 0, width, height);
    var gray = tracking.Image.grayscale(imageData.data, width, height);
    var corners = tracking.Fast.findCorners(gray, width, height);

    var pixelData = [];

    for (var i = 0; i < corners.length; i += 2) {
      var data = context.getImageData(corners[i],corners[i+1],1,1).data;
      pixelData.push([data[0], data[1], data[2]]);
      context.fillStyle = '#f00';
      context.fillRect(corners[i], corners[i + 1], 3, 3);
    }

    return Calibrate.calculateAverage(pixelData);
	};

	Calibrate.calculateAverage = function(arr){
    var averages = arr.reduce(function(acc, curr){
      acc.r += curr[0];
      acc.g += curr[1];
      acc.b += curr[2];
      return acc;
    }, {r: 0, g: 0, b: 0});
    averages.r = Math.round(averages.r / arr.length);
    averages.g = Math.round(averages.g / arr.length);
    averages.b = Math.round(averages.b / arr.length);
    console.log('service calculated averages', averages);
    return averages;
	};

	return Calibrate;
});