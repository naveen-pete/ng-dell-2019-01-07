// JS
// function add(a, b) {
//   return a + b;
// }

// function expression
// const add = function (a, b) {
//   return a + b;
// };

// TS
// function add(a: number, b: number): number {
//   return a + b;
// }

// Arrow function syntax
const add = (a: number, b: number): number => a + b;

const c = add(10, 20);

console.log('c:', c);

const sayHi = () => console.log('Hello TypeScript');

sayHi();

const double = x => x * 2;

console.log(double(10));
