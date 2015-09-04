/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>

angular.module('lsHome', [])
  .config(($locationProvider) => new LetterStudio.Home.Config($locationProvider))
  .controller('HomeCtrl', ($scope) => new LetterStudio.Home.Controller($scope));
