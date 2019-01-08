// function buildName(firstName: string, lastName?: string) {
//   console.log('firstName:', firstName);
//   console.log('lastName:', lastName);
//   return firstName + " " + lastName;
// }

function buildName(firstName: string, lastName: string = 'Smith') {
  console.log('firstName:', firstName);
  console.log('lastName:', lastName);
  return firstName + " " + lastName;
}


let result1 = buildName("Bob");  // error, too few params
console.log(result1);

result1 = buildName('Bob', 'Adams');
console.log(result1);

// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many params
// let result3 = buildName("Bob", "Adams");  // just right
