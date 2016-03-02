'use strict';

module.exports = function () {

    'use strict';

    // ES6

    var multiply = function multiply(multiplier) {
        for (var _len = arguments.length, multiplicand = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            multiplicand[_key - 1] = arguments[_key];
        }

        return multiplicand.map(function (currentElement) {

            return multiplier * currentElement;
        });
    };

    // ES5 Equivalent
    var oldMultiply = function oldMultiply(multiplier) {

        var multiplicand = Array.apply(null, arguments);
        multiplicand.shift(0);

        return multiplicand.map(function (currentElement) {

            return multiplier * currentElement;
        });
    };

    var sum = function sum() {
        for (var _len2 = arguments.length, operands = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            operands[_key2] = arguments[_key2];
        }

        return operands.reduce(function (previousValue, currentValue) {

            return previousValue + currentValue;
        });
    };

    var dummyFunction = function dummyFunction() {
        for (var _len3 = arguments.length, input = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            input[_key3] = arguments[_key3];
        }

        return input;
    };

    return {
        multiply: multiply,
        oldMultiply: oldMultiply,
        sum: sum,
        dummyFunction: dummyFunction
    };
}();