'use strict';

const spread = require('../dist/spread');

describe('Spread Operator', function () {

    beforeEach( function() {

        this.celebrities = spread.celebrities;
        this.visionaries = spread.visionaries;
        this.characters = spread.characters;
    });

    it('allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected', function() {

        const sortedPeople = spread.visionariesFirst();
        const actorString = spread.insertionAround().join(' ');

        expect(sortedPeople).toEqual(this.visionaries.concat(this.celebrities));
        expect(actorString).toMatch(new RegExp('^cool people ' + this.celebrities.join(' ') + ' who are actors$', 'i'));
    });

    it('can replace `apply` in some use cases', function() {

        expect(spread.largestInList()).toEqual(1000);
        expect(spread.largestInListES5()).toEqual(1000);
    });
    it('can assemble multiple arrays inline');
    it('will convert "array like" values to arrays');
});
