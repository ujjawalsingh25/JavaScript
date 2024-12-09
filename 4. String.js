
// const name = "Ujjawal";
// let place = "Patna";
// console.log(`Hello, I am ${name} from ${place}.`);       // using button `` -->> near button 1.
// console.log("---------------------------------------------------------");


const str = new String('Ujjawal Singh');
console.log(str.__proto__);     //-->> To access all string properties and functions (i.e length, charAt, slice, etc)

// console.log(str[3]);
// console.log(str.charAt(3));              // -->> Character at index
// console.log(str.indexOf('t'));          // -->> Character at index
// console.log(str.length);               // -->> length of string
// console.log(str.toUpperCase());        // -->> string to UpperCase

console.log(str.substring(0,7));       // -->> substring from 0 to 7 letters
console.log(str.slice(-6,13));          // -->> Takes 6 letters from back i.e starting from h takes till Space.
// console.log("---------------------------------------------------------");



let str2 = "   Kolkata  -   Patna      ";
console.log(str2.trim());                     // -->> Remove extra space from start and end not in between.
console.log(str2.replace('-', 'to'));         // -->> Replace the string.
console.log(str2.includes('Kolkata'));       // -->> Checks wheather the word or char is present or not in string.
console.log(str2.split('-'));                // -->> Splits the string to multiple which is between the key.