'use strict';

module.exports = (function () {

    const publicName = 'zedd45';
    // have lint ignore this for sake of discussion private vs public
    const privateName = 'Chris Keen'; /* eslint no-unused-vars: 0 */

    const roundOff = function(number) {

        return Math.ceil(number * 100) / 100;
    };

    const dollarFormatter = function (number) {

        return '$' + roundOff(number);
    };

    // "Revealing" Module Pattern
    // https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern

    return {
        publicName,
        dollarFormatter
    };

})();
