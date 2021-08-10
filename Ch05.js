/*
//Generate Random YT Values
'use strict';

let base64 = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d",
"e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x",
"y","z","1","2","3","4","5","6","7","8",
"9","0","-","_"];

let videoURL = "https://www.youtube.com/watch?v=";

for (let i=0;i<11;i++ ){
    let randomPick = Math.floor(Math.random() * base64.length);
    //console.log(randomPick);
    videoURL = videoURL + base64[randomPick];

}

console.log(videoURL);
-------------------------------------------------------------------

console.log(typeof(undefined));
let person = undefined;
console.log(person.mood); // TypeError!


let bandersnatch;
console.log(bandersnatch); // undefined


let mimsy = null;
console.log(mimsy.mood);


console.log(typeof(null)); // Not object but value

console.log(typeof(true)); 
console.log(typeof(false)); 

console.log(typeof(28)); // "number"
console.log(typeof(3.14)); // "number"
console.log(typeof(-140)); // "number"

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2 === 0.30000000000000004); // true

let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(NaN)); // "number"


console.log(typeof("こんにちは")); // "string"
console.log(typeof('こんにちは')); // "string"
console.log(typeof(`こんにちは`)); // "string"
console.log(typeof('')); // "string"


let cat = 'Cheshire';
console.log(cat.length);
console.log(cat[0]);
console.log(cat[1]);



let answer = prompt('Enter your name please');
console.log(answer);

*/

let alohomora = Symbol();
console.log(typeof(alohomora)); // "symbol"

/*
----------------------------------------------
Undefined
Null
Booleans
Numbers
BigInts
Strings
Symbols
----------------------------------------------
*/