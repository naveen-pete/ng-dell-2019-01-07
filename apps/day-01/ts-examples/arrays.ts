const numbers: number[] = [10, 20, 30];

console.log('before:', numbers);

numbers[3] = 40;

console.log('after:', numbers);

numbers[numbers.length] = 50;

console.log('after:', numbers);