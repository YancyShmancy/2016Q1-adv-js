module.exports = (function () {

    'use strict';

    const repeat = function (times, callback) {

        for(let i=0; i < times; i++) {
            callback(i);
        }
    };

    const callback = function(index) {

        console.log('index');
        return index;
    };

    return {
        repeat,
        callback
    };

})();
