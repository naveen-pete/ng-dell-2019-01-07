function add(numbers) {
    // let sum = 0;
    // for(let i=0; i<numbers.length; i++) {
    //   sum += numbers[i];
    // }
    // return sum;
    // return numbers.reduce(function(acc, n) {
    //   return acc + n
    // }, 0);
    return numbers.reduce(function (acc, n) { return acc + n; }, 0);
}
function add1() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, n) { return acc + n; }, 0);
}
console.log(add1(10, 20));
console.log(add1(10, 20, 30));
console.log(add1(10, 20, 30, 40, 50, 60, 70));
