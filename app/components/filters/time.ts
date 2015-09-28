/// <reference path="../../../typings/angularjs/angular.d.ts"/>

angular.module('lsTimeFilter', [])
  .filter('timeFilter', (date) => new LetterStudio.Filters.Time().filter(date))
