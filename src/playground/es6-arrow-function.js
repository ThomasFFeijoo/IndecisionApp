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

const fullName = 'Thomas Feijoo';
const getFirstName = (name) => {
    return name.split(' ')[0];
};

const getFirstNameShorthand = (name) => name.split(' ')[0];

console.log(getFirstName(fullName));
console.log(getFirstNameShorthand(fullName));