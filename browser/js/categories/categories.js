'use strict';

angular.module('InnovateNYP')
.config(function ($stateProvider) {
  $stateProvider.state('categories', {
    url: '/categories',
    templateUrl: 'js/categories/categories.html',
    controller: 'CategoryCtrl',
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