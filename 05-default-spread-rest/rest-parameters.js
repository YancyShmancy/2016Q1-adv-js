module.exports = (function () {

    'use strict';

    // ES6
    const multiply = function (multiplier, ...multiplicand) {

        return multiplicand.map( function(currentElement){

            return multiplier * currentElement;
        });
    };

    // ES5 Equivalent
    const oldMultiply = function (multiplier) {

        let multiplicand = Array.apply(null, arguments);
        multiplicand.shift(0);

        return multiplicand.map( function (currentElement) {

            return multiplier * currentElement;
        });
    };

    const sum = function (...operands) {

        return operands.reduce(function(previousValue, currentValue) {

            return previousValue + currentValue;
        });
    };

    const dummyFunction = function (...input) {

        return input;
    };

    return {
        multiply,
        oldMultiply,
        sum,
        dummyFunction
    };

})();
