/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts"/>

angular.module('appNav', [
  'ui.router',
  'appHome',
  'appList'
])
  .config(($stateProvider, $locationProvider) => new Nav.Config($stateProvider, $locationProvider))
  .controller('appNavCtrl', ($scope) => new Nav.Controller($scope));
