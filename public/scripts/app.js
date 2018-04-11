'use strict';

/*
function square(x) {
    return x * x;
}

// arrow functions, always anonymous
/!*const squareArrow = (x) => {
    return x * x;
};*!/

// identical to the comment above
const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(9));*/

// Challenge - Use arrow functions
// getFirstName('Thomas Feijoo') -> 'Thomas'
// create regular arrow function
// create arrow function using shorthand syntax

var fullName = 'Thomas Feijoo';
var getFirstName = function getFirstName(name) {
    return name.split(' ')[0];
};

var getFirstNameShorthand = function getFirstNameShorthand(name) {
    return name.split(' ')[0];
};

console.log(getFirstName(fullName));
console.log(getFirstNameShorthand(fullName));
