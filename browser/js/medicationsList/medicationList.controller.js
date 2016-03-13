'use strict';

angular.module('InnovateNYP')
.controller('MedicationListCtrl', function($scope, Medication, $mdDialog, category, $state, Calculation){
  $scope.category = category.name;

  Medication.getByUse(category.url)
  .then(function(medications){
  	$scope.filteredMeds = medications.map(function(medication){
			medication.patientDose = Calculation.drugCalc(medication.concentration, medication.dosage, medication.doseUnit, medication.maxDose);
			medication.patientDose[0] = medication.patientDose[0].toFixed(1);
			medication.patientDose[1] = medication.patientDose[1].toFixed(1) + medication.patientDose[2];
			return medication;
  	});
  });

  $scope.goToDetailed = function(medication){
    $mdDialog.cancel();
    $state.go('medDetails', {id: medication._id});
  }
})

