'use strict';

angular.module('InnovateNYP')
.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/home/home.html'
  });
});