'use strict';

/**
 * @ngdoc overview
 * @name missileManApp
 * @description
 * # missileManApp
 *
 * Main module of the application.
 */
angular
  .module('missileManApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('main', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about-us', {
        url: '/about-us',
        templateUrl: 'views/about-us.html',
        controller: 'AboutUsCtrl'
      })
      .state('contact-us', {
        url: '/contact-us',
        templateUrl: 'views/contact-us.html',
        controller: 'ContactUsCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'views/sign-up.html',
        controller: 'SignUpCtrl'
      })
      .state('authorise', {
        url: '/authorise',
        templateUrl: 'views/authorise.html',
        controller: 'AuthoriseCtrl'
      });
  })
  .config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    // $resourceProvider.defaults.stripTrailingSlashes = false;
    $resourceProvider.defaults.useXDomain = true;
    $resourceProvider.defaults.withCredentials = true;
    // console.log($resourceProvider);
    console.log( 'This is sample test' );
  }]);
