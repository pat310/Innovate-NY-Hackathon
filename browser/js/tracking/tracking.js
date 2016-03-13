'use strict';

angular.module('InnovateNYP')
.config(function ($stateProvider){
	$stateProvider.state('tracking', {
		url: '/trackimage',
		templateUrl: 'js/tracking/tracking.html',
		controller: 'TrackingCtrl'
	});
});