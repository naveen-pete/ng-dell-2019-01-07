var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        this.pop = function () { return _this.data.pop(); };
        this.show = function () {
            console.log('Queue.data:', _this.data);
        };
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    return Queue;
}());
// class Queue {
//   private data: number[] = [];
//   push(item: number) { 
//     this.data.push(item);
//   }
//   pop = (): number => this.data.pop();
//   show = () => {
//     console.log('Queue.data:', this.data);
//   }
// }
var q = new Queue();
q.push(10);
q.show();
q.pop();
q.show();
var q1 = new Queue();
q1.push('hari');
q1.push('krish');
q1.show();
q1.pop();
q1.show();
