// Test some basic stuff to make sure everything is set up correctly
// console.log('Hello World');

const firstName = 'Jeff';
const lastName = 'Tellew';

// "var" keyword has fallen out of favor
// The main difference: var is function-scoped, while let is block-scoped. Block-scoped is how pretty much everything else (Java, C++, etc) works.
let age = 24;

// Or we can make a good old object
let jeff = {
    firstName : "Jeff",
    lastName : "Tellew",
    age : 24,
    favoriteColor: 'Purple'
};

console.log(firstName + ' ' + lastName + ' is ' + age + ' years old.');
console.log(jeff.favoriteColor);