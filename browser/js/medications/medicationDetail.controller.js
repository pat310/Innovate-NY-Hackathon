'use strict';

angular.module('InnovateNYP')
.controller('MedicationDetailCtrl', function($scope, medication, moment, Calculation){
  $scope.medication = medication;
  medication.patientDose = Calculation.drugCalc(medication.concentration, medication.dosage, medication.doseUnit, medication.maxDose);
  medication.patientDose[0] = medication.patientDose[0].toFixed(1);
  medication.patientDose[1] = medication.patientDose[1].toFixed(1) + medication.patientDose[2];
  $scope.patientDose = medication.patientDose;

  $scope.date = new Date();

  $scope.formatDate = function(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss');
  }

  $scope.demoDate = function(date){
    return moment(date).subtract(1, 'hour').format('MMMM Do YYYY, h:mm:ss');
  }
})
