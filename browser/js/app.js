'use strict';
window.app = angular.module('InnovateNYP', [
  'fsaPreBuilt', 
  'ui.router', 
  'ui.bootstrap', 
  'ngAnimate',
  'ngMaterial',
  'ngMdIcons'
]);

angular.module('InnovateNYP')
.config(function ($urlRouterProvider, $locationProvider) {
  // This turns off hashbang urls (/#about) and changes it to something normal (/about)
  $locationProvider.html5Mode(true);
  // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
  $urlRouterProvider.otherwise('/');
})
.config(function($mdThemingProvider) {
  let addedColor = $mdThemingProvider.extendPalette('indigo', {
    '400': '26a69a',
    '500': '009688',
    '600': '00897b',
    '700': '00796b',
    '800': '00695c',
    '900': '004d40',
    'A100': 'a7ffeb',
    'A200': '64ffda',
    'A400': '1de9b6',
    'A700': '00bfa5'        
  })
  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('extendedIndigo', addedColor);
  // Use that theme for the primary intentions
  $mdThemingProvider.theme('default')
    .primaryPalette('extendedIndigo')
});



// This app.run is for controlling access to specific states.
app.run(function ($rootScope, AuthService, $state) {

  // The given state requires an authenticated user.
  var destinationStateRequiresAuth = function (state) {
    return state.data && state.data.authenticate;
  };

  // $stateChangeStart is an event fired
  // whenever the process of changing a state begins.
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

    if (!destinationStateRequiresAuth(toState)) {
      // The destination state does not require authentication
      // Short circuit with return.
      return;
    }

    if (AuthService.isAuthenticated()) {
      // The user is authenticated.
      // Short circuit with return.
      return;
    }

    // Cancel navigating to new state.
    event.preventDefault();

    AuthService.getLoggedInUser().then(function (user) {
      // If a user is retrieved, then renavigate to the destination
      // (the second time, AuthService.isAuthenticated() will work)
      // otherwise, if no user is logged in, go to "login" state.
      if (user) {
        $state.go(toState.name, toParams);
      } else {
        $state.go('login');
      }
    });
  });

});
