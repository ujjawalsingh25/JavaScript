// const score = 400;
// console.log(score);
// console.log("---------------------------------------------------------");


// const num = new Number(25);
// console.log(num);

// console.log(num.toString().length);      // Numbewr to string 
// console.log(num.toFixed(2));            // Decimal to 2 point value
// console.log("---------------------------------------------------------");

// const num2 = new Number(4803.769);
// console.log(num2.toPrecision(4));       // Round off to 4 digit
// console.log(num2.toPrecision(6));       // Round off to 6 digit
// console.log("---------------------------------------------------------");

const num3 = new Number(1000000);
console.log(num3.toLocaleString());              // Change in number system (comma b/w number)
console.log(num3.toLocaleString('en-IN'));       // Change in number system in Indian standard (comma b/w number)
console.log("------------------------");



//----------------Math-------------------
console.log(Math);                                  // Object to access math properties and function.
console.log(Math.abs(-2));                          // For absolute, -ve to +ve
console.log(Math.round(6.86));                      // Round off
console.log("------------------------");
console.log(Math.ceil(5.87));                       //  Ceil value
console.log(Math.floor(5.87));                      // Floor Value
console.log("------------------------");
console.log(Math.min(4, 2, 3, 1, 5.87));            // For min value
console.log(Math.max(4, 2, 6, 1, 5.87));            // For max value

console.log("------------------------");
console.log(Math.random());                          // Random gives a number between 0 and 1 (0 < n < 1)
console.log(Math.random()*10);                      // Give a random number between 0 and 10
console.log(Math.floor(Math.random()*10)+1);        // One added to ensure minimun of 1 as (0.3940 will be 0).  (1 <= n < 10)

let maxi = 10;
let mini = 20;
console.log(Math.floor(Math.random()*(maxi - mini + 1)) + mini);    // Give a random number between maxi and mini



