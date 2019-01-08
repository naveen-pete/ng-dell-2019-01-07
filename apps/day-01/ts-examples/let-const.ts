function foo() {
  const a = 10;

  // if
  {
    const a = 20;

    console.log('inside block:', a);  
  }

  console.log('outside block:', a);
}

foo();

// console.log('inside block:', a);  
