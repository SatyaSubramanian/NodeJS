/*
----------------------------------------------
Undefined
Null
Booleans
Numbers
BigInts
Strings
Symbols
Objects{} //arrays, dates, RegExps, and other non-primitive values
Functions()
----------------------------------------------


console.log(typeof({})); // "object"
console.log(typeof([])); // "object"
console.log(typeof(new Date())); // "object"
console.log(typeof(/\d+/)); // "object"
console.log(typeof(Math)); // "object"


let rapper = { name: 'Malicious' };
rapper.name = 'Malice'; // Dot notation
rapper['name'] = 'No Malice'; // Bracket notation

console.log(rapper.name);

let junk = {};
junk = null; // Doesn't necessarily destroy an object



for (let i = 0; i < 7; i++) {
    console.log({}); // Seven Objects
    console.log('s'); // One - Seven times
  }


let countDwarves = function() { return 7; };
let dwarves = countDwarves;
console.log(dwarves); // Object
*/
let countDwarves = function() { return 7; };
let dwarves = countDwarves(); // () is a function call - countDwarves() is also an expression. It’s known as a call expression.
console.log(dwarves);

