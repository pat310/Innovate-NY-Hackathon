'use strict';

angular.module('InnovateNYP')
.controller('MedicationCtrl', function($scope, Medication, medications, $mdDialog, $mdMedia){
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

  $scope.openMedList = function(category, event){
    $mdDialog.show({
      controller: 'MedicationListCtrl',
      templateUrl: 'js/medicationsList/medicationList.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true,
      fullscreen: $mdMedia('xs') || $mdMedia('sm'),
      locals: {
        category: category
      }
    })
  }
})