
"use strict";       //-->> treat all JS Code as newer version
// alert("Ujjawal")    // -->> Give a pop-up in browsers
// alert(5+3)          // -->> WORK IN Browser rather NODE JS

// symbol => unique // -->> DATA Type when uniquess required

// console.log(typeof "Ujjawal");      // String
// console.log(typeof null);           // Object -->> Null is an object type
// console.log(typeof undefined);      // undefined

// --------------------------------------------------------------------------------

// "33" --> 33
// "33abc" --> NaN
//  true --> 1; false --> 0

// 1 --> true; 0 --> false
// "" --> false
// "ujjawal" --> true



// let num = 25
// let name = "Ujjawal";

// console.log(typeof (num))
// console.log(typeof (name));

// let numChange = String(num)
// let strChange = Number(name)


// console.log(typeof (strChange))       // -->> 25 is change to string type
// console.log(typeof (numChange));       // -->> name datatype change to number but value will be NaN(Not a Number)

// console.log(strChange);             
// console.log(numChange);             


// let isLoggedIn = true
// let isLoggedIn = 1
// let isLoggedIn = "hello"

// let intToBool = Boolean(isLoggedIn)
// let strToBool = Boolean(isLoggedIn)
// let boolToInt = Number(isLoggedIn)
// let boolToStr = String(isLoggedIn)

// console.log(typeof (isLoggedIn))
// console.log(boolToInt)
// console.log(boolToStr)
// console.log(intToBool)
// console.log(strToBool)

// -----------------------------------------------------------------------------------

let str1 = "15"
let str2 = "34"
let str3 = str1 + str2
console.log("str3: ",str3);
console.log("-------------");

console.log(11 + 57);               // taken both as int
console.log("11" + 57);             // taken both as string
console.log("11" + "57");           // taken both as string
console.log("-------------");

console.log("1" + 2 + "3");         // taken all as string
console.log("1" + 2 + 3);           // taken all as string
console.log(1 + 2 + "3");           // first two taken as int and last as string
console.log("-------------");

console.log(+true);         // + typecasted it to int 
console.log(+"");           // + typecasted it to int 

let a, b, c, d 
a = b = c = d = 25
console.table([a,b,c,d]);