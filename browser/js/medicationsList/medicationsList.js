'use strict';
angular.module('InnovateNYP')
.config(function ($stateProvider) {
  $stateProvider.state('medications.category', {
    url: '/:category',
    templateUrl: 'js/medicationsList/medicationList.html',
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