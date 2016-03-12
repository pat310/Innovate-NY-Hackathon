'use strict';

angular.module('InnovateNYP')
.controller('CategoryCtrl', function($scope, Medication, medications){
  $scope.categories = Medication.categories;
  $scope.medications = medications;

  $scope.querySearch = function(query){
    return query ? $scope.medications.filter(filterQuery(query)) : $scope.medications;
  }

  function filterQuery(query){
    let formattedQuery = query.toLowerCase();
    return function filterFn(medication){
      let med = medication.name.toLowerCase();
      return (med.indexOf(query) > -1);
    }
  }
})