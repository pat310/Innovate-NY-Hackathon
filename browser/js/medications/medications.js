'use strict';
angular.module('InnovateNYP')
.config(function ($stateProvider) {
  $stateProvider.state('medications', {
    url: '/medications/:category',
    templateUrl: 'js/medications/medicationList.html',
    controller: 'MedicationListCtrl',
    resolve: {
      medications: function($stateParams, Medication){
        console.log('stateParams', $stateParams);
        return Medication.getByUse($stateParams.category)
        .then(function(medications){
          return medications;
        })
      }
    }
  });
});