/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>

angular.module('lsHome', ['ui.router', 'lsNav'])
  .config(($stateProvider) => new LetterStudio.Home.Config($stateProvider))
  .controller('lsHomeCtrl', ($scope) => new LetterStudio.Home.Controller($scope));
