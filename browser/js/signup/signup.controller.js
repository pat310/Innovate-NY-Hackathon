app.controller('SignupCtrl', function ($scope, AuthService, $state) {

    $scope.signup = {};
    $scope.error = null;

    $scope.sendsignup = function (signupInfo) {

        $scope.error = null;
        if (signupInfo.email && signupInfo.password) {
            AuthService.signup(signupInfo).then(function () {
                $state.go('home');
            }).catch(function (error) {
                $scope.error = error.data.message;
            });
        }
        else {
            $scope.error = "It seems either your password or email are missing"
        }
    };
});