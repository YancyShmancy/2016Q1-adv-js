module.exports = (function () {

    'use strict';

    const visionaries = ['Jon Resig', 'Eran Hammer', 'Dan Abramov'];
    const celebrities = ['Ryan Reynolds', 'Patrick Stewart', 'Harrison Ford'];
    const characters = ['Deadpool', 'Captain Picard', 'Han Solo'];
    const numbers = [404, 42, 1000, 502, 3.14];

    const visionariesFirst = () => {

        return [...visionaries, ...celebrities];
    };

    const insertionAround = () => {

        // show pushing/insertion with spread on existing arrays
        return ['cool', 'people', ...celebrities, 'who', 'are', 'actors'];
    };


    // ES6 method of finding largest number in array
    const largestInList = () => {

        return Math.max(...numbers);
    }

    // ES5 method of finding largest number in array
    const largestInListES5 = () => {

        return Math.max.apply(null, numbers);
    }

    return {
        visionaries,
        celebrities,
        characters,
        visionariesFirst,
        insertionAround,
        largestInList,
        largestInListES5
    };

})();
