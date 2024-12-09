
// // ********* New Keyword  *************************************


// const data = {              //  Object data created with two elements (value and increment)
//     value: 25,
//     increment: 5
// };
// console.log(data.value);
// console.log(data.increment);
// console.log("---------------------------------------------");

// function multiplyBy5(num) {
//     return num*5;
// }
// multiplyBy5.power = 2;         adding properties to functions is possible in JavaScript because functions are objects. However, this is not a common practice 
//                                                                  and is generally avoided unless you have a specific reason to attach properties to functions.
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);          // Function make use like a object.
// console.log(multiplyBy5().power);        // Function return value taken an object and uses prototype of power
// console.log(multiplyBy5.prototype);      // Give value {} which is "THIS keyword" of the funciton to use all prototype or properties of the 
                                            // given value of function(f(x) then for x -->> {} used as "THIS keyword" to allow 'x' to use all prototype)

//**********************************************************************************************************************
// Every thing or Element in Javascript is Object. All elements(like functions, array, string) have its own functionality but can be behave like objects 
// A prototype keep on looking further and further to parent to grandParent to grandGrandParent till Null.

//            function    
//                 \
//                  \
//                   \ 
//    Array ----->  Object    -------->> NULL
//                   /
//                  /
//                 /   
//             String  
//**********************************************************************************************************************


function createUser(username, score){
    this.username = username,
    this.score = score
}

createUser.prototype.increment = function(){            // The function taken as object and the prototype is added to function 
    this.score++;                                       // but need to access using 'NEW keyword' otherwise TypeError: Cannot read properties of undefined
}
createUser.prototype.printMe = function(){               // The function taken as object and the prototype is added to function
    console.log(`Score: ${this.score}`);                    // So access using 'NEW keyword'.
}   
const userOne = new createUser("Amit", 25);             // Using 'NEW keyword' it recognise the newly added prototype
const userTwo = createUser('Ajay', 40);          // Without 'NEW keyword' it don't recognise the newly added prototype and TypeError: Cannot read properties of undefined

userOne.increment();
userOne.printMe();
// console.log("--------------------------------------------------------------------------------------");





// ********* Prototype  *************************************

const arr = [2, 5, 6];

Array.prototype.newUjjawal = function() {                   // Prototype added to Array(lower hierarchy) so can't access to
    console.log("Pototype added to lower hierarchy");       // higher hierarchy (like Objects) that allow all to pass or execute
}                                                           // So here if (function or String) tries to acces it won't alloe 

let myData = {
    name: "Ujjawal",
    place: "Patna",
    pincode: function(){
        console.log(`${this.place}-800007`);
    }
}

Object.prototype.Ujjawal = function() {      // All elements move further from object or behave like to change Obj proto to access all                  
    console.log("Hello, the prototype is added now");       // Prev this prototype was not present but now it is present to Object
//                                                                 or onto Top level hierarchy.
}

myData.Ujjawal();           // prototype added  to Object so access to all as all pass through it
arr.Ujjawal();                // prototype added  to Object so access to all as all pass through it

arr.newUjjawal();                // prototype added  to Array (lower hierarchy) so access to Array Datatype only
// myData.newUjjawal();           // prototype added to Array (lower hierarchy).So Object(high hierarchy) can't access 

// console.log("------------------------------------------------------------------------------------------------------");
// // Ques. Write a prototype (name - trueLength) that gives length of string irrespective of blank space
// // ujjawal    - 10 , trueLength = 7
// //      hello - 10 trueLength = 5
// // Code
//     str = "ujjawal   ";
//     String.prototype.trueLength = function() {
//         console.log(`${this}`);
//         console.log(`${this.name}`);
//         console.log(`TrueLength: ${this.trim().length}`);
//     }
//     str.trueLength();
// console.log("------------------------------------------------------------------------------------------------------");




// // ********* Inheritance  *************************************
// old syntax ( __proto__ ) ------------------
const base = {
    base: "The base order"
}

const derived = {
    derived:"Prototype make common with base",
    __proto__: base                            // __proto__ helps in "INHERTNACE" to access properties of base to derived
}

// new syntax -------------------
Object.setPrototypeOf(base, derived);

