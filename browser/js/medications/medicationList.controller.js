'use strict';

angular.module('InnovateNYP')
.controller('MedicationListCtrl', function($scope, medications){
  $scope.medications = medications;
  console.log('medications', $scope.medications)
})