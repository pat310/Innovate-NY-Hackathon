app.controller('PatientCenterCtrl', function ($scope, Session) {
  $scope.appointmentInfo = [
    {
      event: "Dr. Smith",
      time: "March 15th at noon",
      location: "NY Presbyterian"
    },    
    {
      event: "Dr. Doe",
      time: "March 22th at 5PM",
      location: "NY Presbyterian"
    },    
    {
      event: "Dr. Doherty",
      time: "March 29th at noon",
      location: "NY Presbyterian"
    },
  ]
});