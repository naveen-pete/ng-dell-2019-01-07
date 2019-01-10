interface StringValidator {
  isAcceptable(s: string): boolean;
}

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    console.log('ZipCodeValidator.isAcceptable() invoked!');
    console.log('  input =', s);

    return s.length === 5;
  }
}

class ContainsSpaceValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    console.log('ContainsSpaceValidator.isAcceptable() invoked!');
    console.log('  input =', s);

    return s.indexOf(' ') < 0;
  }
}



export { ZipCodeValidator, ContainsSpaceValidator };