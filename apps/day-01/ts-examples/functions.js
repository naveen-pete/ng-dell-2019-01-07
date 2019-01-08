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
var add = function (a, b) { return a + b; };
var c = add(10, 20);
console.log('c:', c);
var sayHi = function () { return console.log('Hello TypeScript'); };
sayHi();
var double = function (x) { return x * 2; };
console.log(double(10));
