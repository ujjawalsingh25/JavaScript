// Object Literal

// const user = {
//     name: "Ujjawal SIngh",
//     place: "Kolkata",
//     college: "TMSL",
//     display: function (){
//         console.log("User's Detail");
//         console.log(this);
//         console.log(this.name);
//     }
// }

// console.log(user.name);
// console.log(user.display());
// console.log(this);

// Constructor
function userData (name, roll, dept) {
    this.name = name,
    this.roll = roll,
    this.dept = dept

    this.helloFunction = function(){ 
        console.log(`Hello ${this.name}`);
    }
  return this                       // By default return this implicitly 
}
// const userOne = userData("Ujjawal", 103, "ECE");         // Without new keyword it won't provide new instance or copy
// const userTwo = userData("Pratik", 112, "Civil");        // So it will overwrite previous Data.
// console.log(userOne);                                //  Data obtain because of Node
// console.log(typeof userOne);

const userOne = new userData("Ujjawal", 103, "ECE");           // Need to use constructor always with new keyword
const userTwo = new userData("Pratik", 112, "Civil");         // otherwise it will overwrite the previous constructor data
console.log(userOne);
console.log("Constructor: ",userOne.constructor);
console.log(typeof userOne);


// On using "NEW - keyword" **************************************************************************
// Step 1: An empty object create (called instance) 
// Step 2: Constructor function called then all arguments of function will be bined or packed
// Step 3: All arguments injected using this kewword and give the value
// ***************************************************************************************************
