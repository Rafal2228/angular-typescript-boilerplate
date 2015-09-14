/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />

angular.module('lsNav', [])
  .controller('lsNavCtrl', ($scope) => new LetterStudio.Nav.Controller($scope));
