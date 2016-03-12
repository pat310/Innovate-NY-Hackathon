'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('categories', {
    url: '/categories',
    templateUrl: 'js/categories/categories.html',
    controller: 'CategoryCtrl'
  });
});