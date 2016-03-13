'use strict';

angular.module('InnovateNYP')
.controller('MedicationListCtrl', function($scope, Medication, $mdDialog, category, $state){
  $scope.category = category.name;

  Medication.getByUse(category.url)
  .then(function(medications){
    $scope.filteredMeds = medications;
  })

  $scope.goToDetailed = function(medication){
    $mdDialog.cancel();
    $state.go('medDetails', {id: medication._id});
  }
})

