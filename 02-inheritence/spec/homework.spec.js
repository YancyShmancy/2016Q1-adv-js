'use strict';

// load our 'main'

const Main = require('../homework.js');
const Monster = Main.Monster;
const Vampire = Main.Vampire;
const Person = Main.Person;
const MonsterHunter = Main.MonsterHunter;


// https://github.com/jasmine/jasmine/wiki/Background#enter-jasmine

describe('Person', function () {

    beforeEach( function () {

        this.MonsterHunter = new Person('MonsterHunter');
    });

    it('should have health', function () {

        expect(this.MonsterHunter.health).toBeGreaterThan(0);
    });

    it('should have power', function () {

        expect(this.MonsterHunter.power).toBeGreaterThan(0);
    })

});

describe('MonsterHunter', function() {

    beforeEach( function () {

        this.VanHelsing = new MonsterHunter('VanHelsing');
        this.Vampire = new Monster('Vampire');
        spyOn(this.VanHelsing, 'attack');
    });

    it('can attack a monster', function () {

        this.VanHelsing.attack(this.Vampire);
    });
});

describe('Monster', function () {

    beforeEach( function () {

        this.Vampire = new Monster('Vampire');
    });

    it('should have health', function () {

        expect(this.Vampire.health).toBeGreaterThan(0);
    });

    it('should have power', function () {

        expect(this.Vampire.power).toBeGreaterThan(0);
    })

});

describe('Vampire', function() {

    beforeEach( function () {

        this.MonsterHunter = new Person('Monster Hunter');
        this.Dracula = new Vampire('Dracula');
        spyOn(this.Dracula, 'bite');
    });

    it('can bite a person', function () {

        this.Dracula.bite(this.MonsterHunter);
    });
});
