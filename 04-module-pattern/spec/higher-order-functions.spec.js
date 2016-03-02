'use strict';

const Module = require('../higher-order-functions');
const repeat = Module.repeat;

describe('Higher Order Function', function () {

    it('uses the result of a function to compute a new function (original function operates on another function)', function() {


        spyOn(Module, 'callback').and.callThrough();
        repeat(5, Module.callback);
        expect(Module.callback.calls.count()).toEqual(5);
    });
});
