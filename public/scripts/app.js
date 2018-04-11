'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(1, 2, 1000));

// this keyword - no longer bound

var user = {
    name: 'Thomas',
    cities: ['Florianopolis', 'Santos', 'Barcelona'],
    printPlaces: function printPlaces() {
        var _this = this;

        // map can transform the array
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // arrow function can use 'this'
        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });*/
    }
};

console.log(user.printPlaces());

// Challenge area

var multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return new array have been multiplied
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
