module LetterStudio.Home {

  export class Controller {
    scope: any;

    constructor($scope: ng.IScope, $interval: ng.IIntervalService) {
      this.scope = $scope;
      this.scope.counter = {};
      this.scope.counter.date = {};
      this.scope.counter.date.displayed = {
        hour: 0,
        minute: 0,
        secound: 0
      };

      this.scope.counter.start = () => {
        if (!this.scope.counter.counting) {
          this.scope.counter.date.begin = new Date();
          this.scope.counter.counting = true;
          this.scope.counter.interval = $interval(
            () => {
              let dis = this.scope.counter.date.displayed;
              dis.secound++;
              if (dis.secound == 60) {
                dis.secound = 0;
                dis.minute++;
                if (dis.minute = 60) {
                  dis.minute = 0;
                  dis.hour++;
                }
              }
            },
            1000
          );
        }
      }

      this.scope.counter.stop = () => {
        if (this.scope.counter.counting){
          this.scope.counter.date.end = new Date();
          this.scope.counter.counting = false;
          $interval.cancel(this.scope.counter.interval);
        }
      }
    }
  }
}
