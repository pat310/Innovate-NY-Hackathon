'use strict';

angular.module('InnovateNYP')
.factory('Medication', function(){
  let Medication = {};

  Medication.categories = {
    cardiacArrest: 'Cardiac Arrest',
    dysrythmia: 'Dysrythmia',
    criticalCare: 'Critical Care / general',
    RSI: 'RSI',
    seizure: 'Seizure',
    sedation: 'Sedation',
    pressor: 'Pressor',
    frequent: 'Frequently Used'
  }

  return Medication;
})