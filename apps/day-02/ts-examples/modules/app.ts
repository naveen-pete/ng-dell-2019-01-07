// import { ZipCodeValidator, ContainsSpaceValidator } from './validators/validators';
// import { ZipCodeValidator as ZCV, ContainsSpaceValidator } from './validators/validators';
// import * as v from './validators/validators';

import { ZipCodeValidator } from './validators/zip-code-validator';
import { ContainsSpaceValidator } from './validators/contains-space-validator';

let result: boolean;

// let myValidator = new v.ZipCodeValidator();
// let myValidator = new ZCV();
let myValidator = new ZipCodeValidator();
result = myValidator.isAcceptable('123');
console.log('  result =', result);

result = myValidator.isAcceptable('12345');
console.log('  result =', result);

// myValidator = new v.ContainsSpaceValidator();
myValidator = new ContainsSpaceValidator();
result = myValidator.isAcceptable('Bengaluru');
console.log('  result =', result);

result = myValidator.isAcceptable('New Delhi');
console.log('  result =', result);
