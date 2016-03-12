'use strict';

angular.module('InnovateNYP')
.factory('Medication', function(){
  let Medication = {};

  Medication.categories = [
    { name: 'Cardiac Arrest', url: 'cardiacArrest' },
    { name: 'Dysrythmia', url: 'dysrythmia' },
    { name: 'Critical Care / general', url: 'criticalCare' },
    { name: 'RSI', url: 'RSI' },
    { name: 'Seizure', url: 'seizure' },
    { name: 'Sedation', url: 'sedation' },
    { name: 'Pressor', url: 'pressor' },
    { name: 'Frequently Used', url: 'frequent' }
  ];

  return Medication;
})