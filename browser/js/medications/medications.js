'use strict';
angular.module('InnovateNYP')
.config(function ($stateProvider) {
  $stateProvider.state('medications', {
    url: '/medications/:category',
    templateUrl: 'js/medications/medicationList.html',
    controller: 'MedicationListCtrl'
  });
});