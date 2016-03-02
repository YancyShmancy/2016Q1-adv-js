'use strict';

const restParams = require('../dist/rest-parameters.js');

describe('Rest Parameters', function () {

    beforeEach(function () {

        this.multiply = restParams.multiply;
        this.oldMultiply = restParams.oldMultiply;
        this.sum = restParams.sum;
        this.dummyFunction = restParams.dummyFunction;
    });

    it('allows us to represent an indefinite number of arguments as an array', function() {

        let result = this.multiply(2, 2, 4, 6, 8);
        let es5result = this.oldMultiply(2, 2, 4, 6, 8);
        expect(result).toEqual([4, 8, 12, 16]);
        expect(es5result).toEqual([4, 8, 12, 16]);
    });
    // The rest parameter is only valid as the last parameter of a function.
    // http://tc39wiki.calculist.org/es6/rest-parameters/
    it('can be the only parameter, or the last', function() {

        expect(this.sum(5, 76, 32)).toEqual(113);
    });

    it('will convert the rest parameter into an array', function() {

        const result = this.dummyFunction('a string', [1,2], 'other stuff', 42);
        expect(result).toEqual(jasmine.arrayContaining([42, 'other stuff']));
    });

    xit('calculates the length of the arguments without the rest parameter');

});
