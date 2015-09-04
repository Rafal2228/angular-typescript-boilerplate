/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

angular.module('lsApp', [
  'lsHome'
])
  .config(($locationProvider) => {
    $locationProvider.html5Mode(true);
  });
