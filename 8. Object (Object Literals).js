// Object literalss
// Accessing Object Properties like Obj['propertyName']

// [mySym]: "symbolKey1",              //***// using [] as [mySym] it makes symbol otherwies it will takes as String
// mySym2: "symbolKey2"                //***// Since [] is not used so object taken mySym2 as string rather symbol
// Object.freeze(obj)                        // Freeze the object further change give no error but no changes will be done.
//-------------------------------------------------------------------------------------------------------------------------------


const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const obj = {
    name: "Ujjawal",
    "full name": "Ujjawal Singh", 
    state: "Bihar",
    pincode: 800007,
    isLoggedIn: true,
    [mySym]: "symbolKey1",              //***// using [] as [mySym] it makes symbol otherwies it will takes as String
    mySym2: "symbolKey2"                //***// Since [] is not used so object taken mySym2 as string rather symbol
}
// console.log("----------------------------------------------------------------------------------------------");


console.log(obj);
console.log(obj.name);

console.log(obj.pincode);
console.log(obj["pincode"]);
console.log("----------------------------------------------------------------------------------------------");


// **********  Destructure   **********
// obj.pincode will be pin
const {pincode: pin} = obj;                 // Destructure   /////////  
console.log(pin);
// pin = 700091;               //Error can't assign a new value 
obj.pincode = 700091;
console.log(obj.pincode);       // Always need to excess through objeect to get real time value(or the current value if change)
console.log(pin);               // pin takes the given value only & it doesn't change even value change
console.log("----------------------------------------------------------------------------------------------");




// console.log(obj.full name);                  // Throws an error
console.log(obj["full name"]);

console.log(obj.mySym2);
console.log(typeof obj.mySym2);
console.log(obj[mySym]);
console.log(typeof mySym);
console.log(typeof obj[mySym]);
console.log("--------------------------------------------------------------------------------------------");


// obj.state = "Kolkata";              // This way Object data undergo shadow change 
// console.log(obj.state);
// Object.freeze(obj);                // Freeze the object further change give no error but no changes will be done.
// obj.pincode = "700091";            // Tries to chnage but since freeze so no change.
// console.log(obj.pincode);
// console.log("------------------------------------------------------------------------------------------");


obj.greeting = function(){
    console.log(`Hello ${obj["full name"]}`);
    console.log(`from ${this.state}`);              // this is used to access data of same object
}
console.log(obj.greeting());
// console.log("------------------------------------------------------------------------------------------");

