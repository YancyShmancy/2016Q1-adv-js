'use strict';

module.exports = function () {

    'use strict';

    var visionaries = ['Jon Resig', 'Eran Hammer', 'Dan Abramov'];
    var celebrities = ['Ryan Reynolds', 'Patrick Stewart', 'Harrison Ford'];
    var characters = ['Deadpool', 'Captain Picard', 'Han Solo'];
    var numbers = [404, 42, 1000, 502, 3.14];

    var visionariesFirst = function visionariesFirst() {

        return [].concat(visionaries, celebrities);
    };

    var insertionAround = function insertionAround() {

        // show pushing/insertion with spread on existing arrays
        return ['cool', 'people'].concat(celebrities, ['who', 'are', 'actors']);
    };

    // ES6 method of finding largest number in array
    var largestInList = function largestInList() {
        var _Math;

        return (_Math = Math).max.apply(_Math, numbers);
    };

    // ES5 method of finding largest number in array
    var largestInListES5 = function largestInListES5() {

        return Math.max.apply(null, numbers);
    };

    return {
        visionaries: visionaries,
        celebrities: celebrities,
        characters: characters,
        visionariesFirst: visionariesFirst,
        insertionAround: insertionAround,
        largestInList: largestInList,
        largestInListES5: largestInListES5
    };
}();