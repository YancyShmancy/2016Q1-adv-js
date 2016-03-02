'use strict';

const MyModule = require('../module-pattern.js');

describe('Closures (IIFE)', function () {

    it('has private variables that are inaccessible outside of the module', function() {

        expect(MyModule.privateName).toBeUndefined();
    });

    it('has public variables that are available when we `import` (require) a module', function() {

        expect(MyModule.publicName).toEqual(jasmine.any(String));
        expect(MyModule.dollarFormatter).toEqual(jasmine.any(Function));
    });

    it('has private methods that get called by public methods', function() {

        const input = 300.258;
        expect(MyModule.dollarFormatter(input)).toBe('$300.26');
    });

    it('rounds up any fractional number to a whole cent, so you and the bank are not mad', function() {

        const input = 300.251;
        expect(MyModule.dollarFormatter(input)).toBe('$300.26');
    });

});
