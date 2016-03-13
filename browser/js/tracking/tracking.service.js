'use strict';

angular.module('InnovateNYP')
.factory('Tracking', function($http){
	var Tracking = {};

  Tracking.determinePatientHeight = function(img, div){
    return Promise.all([Tracking.determineBodyLengthPixels(img, div), Tracking.determineMarkerLengthPerPixel(img, div)])
    .then(function(resultsArr){
      return resultsArr[0] * resultsArr[1];
    });
  };

  Tracking.determineBodyLengthPixels = function(img, div){
    return new Promise(function(resolve, reject){
      var tracker = new tracking.ObjectTracker('face');
      tracker.setStepSize(1.7);

      tracking.track(img, tracker);

      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          plot(rect.x, rect.y, rect.width, rect.height);
        });
          resolve(img.height - event.data[0].y*2);
      });

      function plot(x, y, w, h) {
        var rect = document.createElement('div');
        div.appendChild(rect);
        rect.classList.add('rect');
        rect.style.left = (img.offsetLeft + x) - w * 0.25 + 'px';
        rect.style.top = (img.offsetTop + y) - h * 0.3 + 'px';
        rect.style.width = w*1.5 + 'px';
        rect.style.height = img.height - y * 2 + 'px';
      }
    });
  };

  Tracking.determineMarkerLengthPerPixel = function(img, div, color){
    return new Promise(function(resolve, reject){    
      tracking.ColorTracker.registerColor('custom', function(r,g,b){
        var diff = 15;

        if((r>=26-diff && r<=26+diff) && (g>=35-diff && g<=35+diff) && (b>=78-diff && b<=78+diff)){
          return true;
        }
        return false;
      });

      var tracker = new tracking.ColorTracker('custom');

      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          plot(rect.x, rect.y, rect.width, rect.height, rect.color);
        });
      });

      tracking.track(img, tracker);

      var ccDimensions = [3.37, 2.125]; //in inches

      function plot(x, y, w, h, color) {
        var rect = document.createElement('div');
        div.appendChild(rect);
        rect.classList.add('rect');
        rect.style.border = '2px solid ' + color;
        rect.style.width = w + 'px';
        rect.style.height = h + 'px';
        rect.style.left = (img.offsetLeft + x) + 'px';
        rect.style.top = (img.offsetTop + y) + 'px';

        resolve(getLengthPerPixel(ccDimensions, [parseInt(rect.style.width), parseInt(rect.style.height)]));
      }

      function getLengthPerPixel(itemDimensions, pixelDimensions){
        var width = Math.max(...itemDimensions) / Math.max(...pixelDimensions);
        var height = Math.min(...itemDimensions) / Math.min(...pixelDimensions);

        return (width + height) / 2;
      }
    })
  };

	return Tracking;
});