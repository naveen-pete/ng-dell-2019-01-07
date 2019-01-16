// My tasks at bank
// 1. withdraw money - 22 m - cashier
// 2. update passbook - 5 m - front desk
// 3. apply loan - 28 m - manager

// Synchronous code
console.log('withdraw');
console.log('print passbook');
console.log('apply loan');

// Async code using promise
var p = new Promise((resolve, reject) => {
  console.log('withdraw - start');
  setTimeout(() => {
    console.log('withdraw - finish');
    resolve(1000);
    // reject();
  }, 5000);
});

p.then((amount) => {
  console.log('print passbook:', amount);
});

p.catch(() => {
  console.log('withdraw failed. insufficient balance');
})

console.log('apply loan');
