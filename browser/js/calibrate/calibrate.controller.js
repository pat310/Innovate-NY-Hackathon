'use strict';
angular.module('InnovateNYP')
.controller('CalibrateCtrl', function($scope, Calibrate, $mdDialog){

  $scope.showPrompt = function(ev) {
    var confirm = $mdDialog.confirm()
          .title('Are you using a credit card to measure?')
          .textContent('Credit cards have a standard dimension so we can figure it out for you.')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Yes')
          .cancel('No');
    $mdDialog.show(confirm).then(function() {
      $scope.status = 'creditCard';
    }, function() {
      $scope.status = 'other';
    });
  };

  $scope.showAlert = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('You do not have any saved objects')
        .textContent('Click on \'New Object\'')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  var stream;
  $scope.startCamera = function(){ 
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

  $scope.selectPicture = true;
  var image = new Image();
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

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
        var source = e.target.result;
        $scope.loadPicture(source);
      };
    }
  }

  $scope.loadPicture = function(src){
    $scope.showLoader = true;

    image.src = src;


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
    $scope.analyze = true;

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
        $scope.analyze = false;
        $scope.$digest();
        console.log('averages', averages);
        $scope.backgroundColor = {'background-color':`rgb(${averages.r}, ${averages.g}, ${averages.b})`};
      });
    };
  };
  
});