'use strict';

class Person {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.power = 200;
    }
};

class MonsterHunter extends Person {

    attack(monster) {
        monster.health = monster.health - 50;
        console.log('method (attack) was called!');
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
        person.health = person.health - this.power;
        console.log('method (bite) was called!');
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
