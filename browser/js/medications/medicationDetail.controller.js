'use strict';

angular.module('InnovateNYP')
.controller('MedicationDetailCtrl', function($scope, medication){
  $scope.medication = medication;
})