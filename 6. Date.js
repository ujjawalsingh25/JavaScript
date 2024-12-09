
let myDate = new Date();        // Object to access Date properties and functions

console.log(typeof myDate);
console.log(myDate);                           // Date in date formate
console.log(myDate.getMonth());             // Get month
console.log(myDate.getFullYear());          // get year
console.log(myDate.toString());             // Date in string formate
console.log(myDate.toDateString());         // Date as used in string
console.log(myDate.toLocaleString());      // Date in Local string 

myDate.toLocaleString('default', {          // Defining LocalString with desired properties
    weekday : "long"
})

console.log("--------------------------------");

let birthday = new Date(2001, 4, 22);               // Taking new Date 
let birthday2 = new Date(2001, 4, 22, 11, 35);      // Taking new Date with minute and hour
console.log(birthday.toDateString());
console.log(birthday.toLocaleString());
console.log(birthday2.toLocaleString());
console.log("--------------------------------");

let myTimeStamp = Date.now()
console.log(myTimeStamp);                       // Time came in milisecond till now counting from 1970 so taking it as string
console.log(birthday2.getTime());               // Time of second variable birthday2.
console.log(Math.floor(Date.now()/1000));       // Time divided by 1000 to get in second and floor to get in integer