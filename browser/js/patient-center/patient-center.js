app.config(function ($stateProvider) {

    $stateProvider.state('patientCenter/:uid', {
        url: '/patient-center',
        templateUrl: 'js/patient-center/patient-center.html',
        controller: 'PatientCenterCtrl'
    });

});