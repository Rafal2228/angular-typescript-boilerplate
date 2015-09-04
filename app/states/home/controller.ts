module LetterStudio.Home {

  export class Controller {
    scope: any;

    constructor($scope: ng.IScope) {
      this.scope = $scope;

      this.scope.name = 'Rafal';
      this.scope.surname = 'Majchrzak';
    }
  }
}
