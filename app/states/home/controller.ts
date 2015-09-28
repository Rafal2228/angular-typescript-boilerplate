module Home {

  export class CounterDate {
      begin: Date;
      end: Date;
      displayed: Number;
  }

  class Counter {
    date: CounterDate;
    save: Array<CounterDate>;
    counting: boolean;
    interval: any;
    $interval: angular.IIntervalService;

    constructor(save:any, $interval:angular.IIntervalService) {
      this.save = save;
      this.$interval = $interval;
      this.date = new CounterDate();
    };

    start() {
      if (!this.counting) {
        this.date.begin = new Date();
        this.date.displayed = new Date().getTime();
        this.counting = true;
        this.interval = this.$interval(
          () => {
            this.date.displayed = new Date().getTime();
          }, 1000);
      }
    };

    stop() {
      if (this.counting) {
        this.date.end = new Date();
        this.counting = false;
        this.$interval.cancel(this.interval);
        this.save.push(this.date);
        this.date = new CounterDate();
      }
    };
  }

  export class Controller {
    scope: any;

    constructor($scope: angular.IScope, $interval: angular.IIntervalService) {
      this.scope = $scope;
      this.scope.save = new Array<CounterDate>();
      this.scope.counter = new Counter(this.scope.save, $interval);
    }
  }
}
