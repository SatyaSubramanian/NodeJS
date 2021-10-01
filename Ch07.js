console.log(Object.is(2, 2)); // true
console.log(Object.is({}, {})); // false

/*
JavaScript has several kinds of equality. They include same value equality, strict equality, and loose equality.

Same value equality, or Object.is(a, b), matches the concept of the sameness 
of values that we introduced in the previous module.

Understanding this kind of equality helps prevent bugs! You will often need to know
when you’re dealing with the same value, and when you’re dealing with two different values.

   When we draw a diagram of values and variables, the same value cannot appear twice. 
   Object.is(a, b) is true when variables a and b point to the same value on our diagram.

   Same value equality is verbose and a bit annoying to write, but it's also the easiest 
   to explain, which is why we started with it.

In practice, you will use strict equality, or a === b, most often. It is equivalent to the 
same value equality except for two rare special cases:
    
    NaN === NaN is false, even though they are the same value.
    0 === -0 and -0 === 0 is true, but they are different values.

You can check whether x is NaN using Number.isNaN(x).

Loose equality (==) uses a set of arcane rules and is often avoided.

*/

let ticket = { id: 0 };
if (ticket === { id: 0 }) { // false
  console.log('Bad ticket'); // Will not run.
}else {
  console.log('Good Ticket');  
}


let ticketId = 0;
if (ticketId === 0) {
  console.log('Bad ticket');
}