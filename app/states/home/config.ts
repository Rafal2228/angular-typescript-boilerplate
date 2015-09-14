module LetterStudio.Home {

  export class Config {

    constructor($stateProvider: ng.ui.IStateProvider) {
      $stateProvider.state('main', {
        url: '/home',
        views: {
          nav: {
            templateUrl: 'nav/nav.html',
            controller: 'lsNavCtrl',
          },
          content: {
            templateUrl: 'home/home.html',
            controller: 'lsHomeCtrl'
          }
        }
      });
    }
  }
}
