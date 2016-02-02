'use strict';

// load our 'main'

const Main = require('../index.js');
const Animal = Main.Animal;
const Dog = Main.Dog;


// https://github.com/jasmine/jasmine/wiki/Background#enter-jasmine

describe('Animal', function () {

    beforeEach( function () {

        this.Hippo = new Animal('Hungry, Hungry');
    });

    it('should have 0 calories', function () {

        expect(this.Hippo.calories).toBe(0);
    });

    it('can consume calories', function () {

        this.Hippo.eat({
            name: 'chocolate cake',
            calories: 500
        });

        expect(this.Hippo.calories).toBeGreaterThan(0);
    });

    it('should have 0 calories, again', function() {

        expect(this.Hippo.calories).toBe(0);
    });

});


describe('Dog', function () {

    beforeEach( function () {

        this.Lassie = new Dog('Lassie');

        spyOn(this.Lassie, 'bark');
    });

    it('can bark', function () {

        this.Lassie.bark();
        expect(this.Lassie.bark).toHaveBeenCalled();
        expect(this.Lassie.eat).toEqual(jasmine.any(Function));
    });
});
