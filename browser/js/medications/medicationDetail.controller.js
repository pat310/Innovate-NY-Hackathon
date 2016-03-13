'use strict';

angular.module('InnovateNYP')
.controller('MedicationDetailCtrl', function($scope, medication, Calculation){
  $scope.medication = medication;

  medication.patientDose = Calculation.drugCalc(medication.concentration, medication.dosage, medication.doseUnit, medication.maxDose);
  medication.patientDose[0] = medication.patientDose[0].toFixed(1);
  medication.patientDose[1] = medication.patientDose[1].toFixed(1) + medication.patientDose[2];
  $scope.patientDose = medication.patientDose;

});