// let instance: Counter;

// class Counter {
//   private counter: number = 0;

//   constructor() {
//     if (instance) {
//       throw new Error("You can only create one instance!");
//     }

//     instance = this;
//   }

//   getInstance() {
//     return this;
//   }

//   getCount() {
//     return this.counter;
//   }

//   increment() {
//     console.log("incrementing");
//     return ++this.counter;
//   }

//   decrement() {
//     console.log("decrementing");
//     return --this.counter;
//   }
// }

// export const singletonCounter = new Counter();

let count = 0;

const counter = {
  increment() {
    return ++count;
  },

  decrement() {
    return --count;
  },
  getCount() {
    return count;
  },
};

Object.freeze(counter);
export const singletonCounter = counter;
