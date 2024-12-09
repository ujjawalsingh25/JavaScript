
function power(num1, num2){
    console.log(num1**num2);
}

function add(num1, num2){
    return num1+num2; 
}

power(2,3);
console.log(add(5,3));
console.log("-------------------------------------------------");

function calculateValues(...values){
    return values;                              // All values will be taken as array.
}
function calculateSum(val1, val2, ...values){
    return values;
}
console.log(calculateValues(2,5,7,3,6));
console.log(calculateSum(2,5,7,3,6));           // Values 2 and 5 taken in val1 and val2 resp. and rest in values.
console.log("-------------------------------------------------");



const obj = {
    name: "Ujjawal Singh",
    place: "Patna"
}

//  -----*****    Handle Object
function handleObject(obj){
    console.log(`${obj.name} from ${obj.place}`);    
}
handleObject(obj);              // passed object
handleObject({                    // Given the object values and passed  
    name: "Vikram",
    place: "Kolkata"
})
console.log("-------------------------------------------------");




