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
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about-us', {
        templateUrl: 'views/about-us.html',
        controller: 'AboutUsCtrl',
        controllerAs: 'about'
      })
      .when('/contact-us', {
        templateUrl: 'views/contact-us.html',
        controller: 'ContactUsCtrl',
        controllerAs: 'contactus'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
