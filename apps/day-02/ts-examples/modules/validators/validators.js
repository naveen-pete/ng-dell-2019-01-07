"use strict";
exports.__esModule = true;
var app_1 = require("../app");
console.log(app_1.a);
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
var ContainsSpaceValidator = /** @class */ (function () {
    function ContainsSpaceValidator() {
    }
    ContainsSpaceValidator.prototype.isAcceptable = function (s) {
        console.log('ContainsSpaceValidator.isAcceptable() invoked!');
        console.log('  input =', s);
        return s.indexOf(' ') < 0;
    };
    return ContainsSpaceValidator;
}());
exports.ContainsSpaceValidator = ContainsSpaceValidator;
