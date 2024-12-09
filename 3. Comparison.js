
// The comparison ( >, <, <=, >=) and Equality Checks ( ==, != ) works differently in JavaScript.
// Strict Comparison (===) checks both values and data type. 

console.log("1" == 1);
console.log("2" > 1);           // JS converts string to int 
console.log("2s" > 1);   // JS converts string to int BUT Since the string in not a valid number so converted to NaN. And on comparison false.      
console.log("--1--------------------");

console.log(null > 0);            // Comparison converts null to 0 BUT since null not greater than 0 so false.
console.log(null == 0);          // Equality Check just compare values so false as Null not equal to 0.
console.log(null >= 0);         // comparison converts null to number treating it as 0.
console.log("--2---------------------");

console.log(undefined > 0);            // Special 
console.log(undefined == 0);              // Case
console.log(undefined <= 0);                // undefined always false irrespective to comapred value.
console.log("--3---------------------");

console.log("25" == 25);        // Compare value only
console.log("25" === 25);       // Compare both value and data type


// --------  false statements -------------
// false,  0,   -0,  BigInt 0n,  "",   null,   undefined,   NaN


// --------  true statements --------------
// "0",   'false',   " ",   [],   {},   function(){}
// false == 0,   false == '',    0 == ''
