var app = angular.module('omw', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('/', {
    url: '/',
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl as main'
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl as home'
      }
    }
  })

    .state('tab.omw-detail', {
      url: '/home/:omwId',
      views: {
        'tab-home': {
          templateUrl: 'home/omw-detail/omw-detail.html',
          controller: 'OmwDetailCtrl as omw'
        }
      }
    })

  .state('tab.map', {
      url: '/map',
      views: {
        'tab-map': {
          templateUrl: 'map/map.html',
          controller: 'MapCtrl'
        }
      }
    })

  .state('tab.friends', {
    url: '/friends',
    views: {
      'tab-friends': {
        templateUrl: 'friends/friends.html',
        controller: 'FriendsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
