'use strict';

angular.module('InnovateNYP')
.config(function ($stateProvider) {
  $stateProvider.state('medications', {
    url: '/medications',
    templateUrl: 'js/medications/medications.html',
    controller: 'MedicationCtrl',
    resolve: {
      medications: function(Medication){
        return Medication.getAll()
        .then(function(medications){
          return medications;
        })
      }
    }
  })
})
.config(function ($stateProvider) {
  $stateProvider.state('medDetails', {
    url: '/medications/details/:id',
    templateUrl: 'js/medications/medicationDetail.html',
    controller: 'MedicationDetailCtrl',
    resolve: {
      medication: function(Medication, $stateParams){
        return Medication.getOne($stateParams.id)
        .then(function(medication){
          return medication;
        })
      }
    }
  })
})
