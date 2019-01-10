import { StringValidator } from './string-validator';

export class ContainsSpaceValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    console.log('ContainsSpaceValidator.isAcceptable() invoked!');
    console.log('  input =', s);

    return s.indexOf(' ') < 0;
  }
}
