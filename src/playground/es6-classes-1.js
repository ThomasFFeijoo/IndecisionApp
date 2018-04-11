
// setup constructor to take name and age (default to 0)
// getDescription - 'Name' is 'age' year(s) old.

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        //return 'Hi. I am ' + this.name + '!';
        // shift  @ to make backtick
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        // !! converts to boolean
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}



// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am 'Name'. I'm visiting from 'homeLocation'
// 2. Hi. I am 'Name'


const me = new Student('Thomas Feijoo', 25, 'Computer Science');
const other = new Student();
const traveler = new Traveler('Mochileiro', 30, 'Santos');
const anontraveler = new Traveler();

console.log(me.getDescription());
console.log(other.getDescription());

console.log(traveler.getGreeting());
console.log(anontraveler.getGreeting());