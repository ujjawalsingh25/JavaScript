// Closure
// A closure is a combination of a function and the lexical environment within which that function was declared. This environment consists of the variables and values available to the function at the time of its creation. Closures allow functions to access variables from an outer (enclosing) scope even after the outer function has finished executing.
// *** So here we can access the variable name inside function as they share same "***LEXICAL ENVIRONMENT***"
function user(){
  let name = "Ujjawal";
  function display(){
      console.log(name);
  }
  display();
}
user();


// Lexical Scoping
// In lexical scoping, the scope of a variable is determined at the time of its definition during the parsing phase, and it does not change based on how or where the function is called.
// When a function is declared, it captures its surrounding lexical scope. This means that the function has access to variables in its own scope and the variables in the scope where the function was defined.
// ---------------------------------------------------------------------------------------------------------------------------------
// *** Lexical scope in other words is the scope that contains the referrence or access to call function as well as all required variable or functions needed to execute called function.
//  As In the below code, user2 passed the refernce and when it is called the prev function(square) scope would have over. But still it return value BECAUSE *** lexical scope of display conatins all required variables & function outside the scope also. 
//*** So because of having those data in lexical scope of display we can print the value.
//--------------------------------------------------------------------------------------------------------------------------------------

function user2(){
  let val = 5;
  function square(val){
      let sq = val *val;
      return sq;
  }  // or const square = (val) => val * val;

  function display(){
      console.log(square(val));
  }
  return display;    
}
const printName = user2();
printName();