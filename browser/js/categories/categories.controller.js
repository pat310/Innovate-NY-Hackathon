'use strict';

angular.module('InnovateNYP')
.controller('CategoryCtrl', function($scope, Medication){
  $scope.categories = Medication.categories;

})