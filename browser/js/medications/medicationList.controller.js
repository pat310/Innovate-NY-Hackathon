'use strict';

angular.module('InnovateNYP')
.controller('MedicationListCtrl', function($scope, filteredMedications, $stateParams, Medication, $mdDialog){
  $scope.category = Medication.formatCategoryName($stateParams.category);
  $scope.filteredMeds = filteredMedications;
  console.log('medications', $scope.filteredMeds)
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