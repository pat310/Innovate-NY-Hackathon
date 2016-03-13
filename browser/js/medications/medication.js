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
  });
});