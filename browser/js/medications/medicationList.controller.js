'use strict';

angular.module('InnovateNYP')
.controller('MedicationListCtrl', function($scope, medications, $stateParams, Medication, $mdDialog){
  $scope.category = Medication.formatCategoryName($stateParams.category);
  $scope.medications = medications;
  console.log('medications', $scope.medications)
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