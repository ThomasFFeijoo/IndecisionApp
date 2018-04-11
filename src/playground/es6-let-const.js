var nameVar = 'Thomas';
var nameVar ='Mike';
// can redefine
console.log('nameVar', nameVar);

let nameLet = 'Jen';
// can't redefine
nameLet = 'Julie';
console.log('namelet', nameLet);

const nameConst = 'John';
// can't redefine, not even change it
console.log('nameconst', nameConst);

// block scoping

const fullName = 'Thomas Feijoo';
let firstName;
// const and let only works inside code block, not visible outside
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);