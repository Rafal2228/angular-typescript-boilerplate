/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>

angular.module('lsHome', ['ui.router', 'lsNav', 'lsTimeFilter'])
  .config(($stateProvider) => new LetterStudio.Home.Config($stateProvider))
  .controller('lsHomeCtrl', ($scope, $interval) => new LetterStudio.Home.Controller($scope, $interval));
