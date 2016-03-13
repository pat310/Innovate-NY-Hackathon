'use strict';

angular.module('InnovateNYP')
.factory('Medication', function($http){
  let Medication = {};

  Medication.categories = [
    { name: 'Cardiac Arrest', url: 'cardiacArrest' },
    { name: 'Dysrhythmia', url: 'dysrhythmia' },
    { name: 'Critical Care / General', url: 'criticalCare' },
    { name: 'RSI', url: 'RSI' },
    { name: 'Seizure', url: 'seizure' },
    { name: 'Sedation', url: 'sedation' },
    { name: 'Pressor', url: 'pressor' },
    { name: 'Frequently Used', url: 'frequent' }
  ];

  Medication.getAll = function(){
    return $http.get(`/api/medications`)
    .then(function(res){
      return res.data;
    })
  }

  Medication.getByUse = function(category){
    return $http.get(`/api/medications/${category}`)
    .then(function(res){
      return res.data;
    })
  }

  Medication.formatCategoryName = function(categoryUrl){
    let name;
    Medication.categories.forEach(category => {
      if(category.url === categoryUrl) name = category.name;
    })
    return name;
  }

  Medication.getOne = function(id){
    return $http.get(`/api/medications/details/${id}`)
    .then(function(res){
      return res.data;
    })
  }

  return Medication;
})