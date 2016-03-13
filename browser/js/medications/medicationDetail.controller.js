'use strict';

angular.module('InnovateNYP')
.controller('MedicationDetailCtrl', function($scope, medication, moment){
  $scope.medication = medication;
  $scope.date = new Date();

  $scope.formatDate = function(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss');
  }

  $scope.demoDate = function(date){
    return moment(date).subtract(1, 'hour').format('MMMM Do YYYY, h:mm:ss');
  }
})