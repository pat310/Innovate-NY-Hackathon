'use strict';
angular.module('InnovateNYP')
.config(function ($stateProvider) {
  $stateProvider.state('medications', {
    url: '/medications/:category',
    templateUrl: 'js/medications/medicationList.html',
    controller: 'MedicationListCtrl',
    resolve: {
      filteredMedications: function($stateParams, Medication){
        return Medication.getByUse($stateParams.category)
        .then(function(medications){
          return medications;
        })
      }
    }
  });
});