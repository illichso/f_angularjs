'use strict';

/**
 * @ngdoc overview
 * @name walkthrough3SelfApp
 * @description
 * # walkthrough3SelfApp
 *
 * Main module of the application.
 */
angular
  .module('walkthrough3SelfApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
