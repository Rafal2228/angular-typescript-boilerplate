/// <reference path="../../../typings/angularjs/angular.d.ts" />

angular.module('appList', [])
  .controller('appListCtrl', ($scope) => new List.Controller($scope));
