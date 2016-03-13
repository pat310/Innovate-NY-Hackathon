'use strict';

angular.module('InnovateNYP')
.controller('MedicationListCtrl', function($scope, $stateParams, Medication, $mdDialog, category){
  $scope.category = category.name;

  Medication.getByUse(category.url)
  .then(function(medications){
    $scope.filteredMeds = medications;
  })
  
  $scope.navigateTo = function(to, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .textContent('Imagine being taken to ' + to)
        .ariaLabel('Navigation demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };
})