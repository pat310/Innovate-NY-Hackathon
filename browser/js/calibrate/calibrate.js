'use strict';

angular.module('InnovateNYP')
.config(function ($stateProvider){
	$stateProvider.state('calibrate', {
		url: '/calibrate',
		templateUrl: 'js/calibrate/calibrate.html',
		controller: 'CalibrateCtrl'
	});
});