'use strict';

class Person {

    constructor (name) {
        this.name = name;
        this.health = 100;
        this.power = 200;
    };
};

class MonsterHunter extends Person {

    attack(monster) {
        console.log('monster (%o) has %n health before attack:', monster, monster.health);
        monster.health = monster.health - 50;
        console.log('monster has %n health after attack:', monster.health);
    };
};

const VanHelsing = new MonsterHunter();

class Monster {

    constructor (name) {
        this.name = name;
        this.health = 200;
        this.power = 100;
    };
};

class Vampire extends Monster {

    bite(person) {
        console.log('person (%o) has %n health before attack:', person, person.health);
        person.health = person.health - this.power;
        console.log('person has %n health after attack:', person.health);
    };
};

const Dracula = new Vampire();

//console.log(Dracula.bite(VanHelsing));
//
//console.log(VanHelsing.attack(Dracula));

exports.Person = Person;
exports.MonsterHunter = MonsterHunter;
exports.Monster = Monster;
exports.Vampire = Vampire;
