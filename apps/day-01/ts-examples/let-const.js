function foo() {
    var a = 10;
    // if
    {
        var a_1 = 20;
        console.log('inside block:', a_1);
    }
    console.log('outside block:', a);
}
foo();
// console.log('inside block:', a);  
