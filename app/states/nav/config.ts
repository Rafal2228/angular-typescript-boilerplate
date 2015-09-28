module Nav {

  export class Config {

    constructor($stateProvider: angular.ui.IStateProvider, $locationProvider: angular.ILocationProvider) {
      $locationProvider.html5Mode(true);

      $stateProvider
        .state('main', {
          url: '/',
          views: {
            nav: {
              templateUrl: 'nav/nav.html',
              controller: 'appNavCtrl',
            },
            content: {
              templateUrl: 'home/home.html',
              controller: 'appHomeCtrl'
            }
          }
        })
        .state('list', {
          url: '/list',
          views: {
            nav: {
              templateUrl: 'nav/nav.html',
              controller: 'appNavCtrl',
            },
            content: {
              templateUrl: 'list/list.html',
              controller: 'appListCtrl'
            }
          }
        });
    }
  }
}
