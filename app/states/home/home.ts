/// <reference path="../../../typings/angularjs/angular.d.ts" />

angular.module('appHome', [])
  .controller('appHomeCtrl', ($scope, $interval) => new Home.Controller($scope, $interval));
