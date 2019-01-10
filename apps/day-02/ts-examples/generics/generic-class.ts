class Queue<T> {
  private data: T[] = [];

  push(item: T) { 
    this.data.push(item);
  }

  pop = (): T => this.data.pop();

  show = () => {
    console.log('Queue.data:', this.data);
  }
}

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

const q = new Queue<number>();
q.push(10);
q.show();

q.pop();
q.show();

const q1 = new Queue<string>();
q1.push('hari');
q1.push('krish');
q1.show();

q1.pop();
q1.show();
