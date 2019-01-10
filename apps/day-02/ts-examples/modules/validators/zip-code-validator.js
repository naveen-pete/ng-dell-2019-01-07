"use strict";
exports.__esModule = true;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        console.log('ZipCodeValidator.isAcceptable() invoked!');
        console.log('  input =', s);
        return s.length === 5;
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
