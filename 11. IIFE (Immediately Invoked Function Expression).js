//  IIFE
//Immediately Invoked Function Expression   (IIFE)
// () ();  //-->> 1st () is for function and 2nd () is for execution and semi-colon is required to define end.



// function f1(){
//     console.log("Function f1 executed");         // error function is not in bracket 
// } ()                     // without semicolom although this can be execute without ';' but further will be error as end of function is not defined

// Named IIFE
( function f1(){                                
    console.log("Function f1 executed");
} ) ();                                             // Need a semi-colon to decribe end of function


// Simple IIFE
( () => {
    console.log("Obj executed from function");      // A function without parameter returns a object with print statement
}) ();                  // Need a semi-colon to decribe end of function


( (name) => {
    console.log(`Hello ${name}, Obj executed from function with parameter`);      // A function with parameter returns a object with print statement
}) ("Ujjawal");            // A parameter is passed with string "Ujjawal"   and   Need a semi-colon to decribe end of function