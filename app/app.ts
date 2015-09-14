/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angular-ui-router/angular-ui-router.d.ts"/>

angular.module('lsApp', [
  'lsNav',
  'lsHome',
  'ui.router'
])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');
  });
