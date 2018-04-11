// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(1,2,1000));

// this keyword - no longer bound

const user = {
    name: 'Thomas',
    cities: ['Florianopolis','Santos','Barcelona'],
    printPlaces() {
        // map can transform the array
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // arrow function can use 'this'
        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });*/
    }
};

console.log(user.printPlaces());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return new array have been multiplied
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());