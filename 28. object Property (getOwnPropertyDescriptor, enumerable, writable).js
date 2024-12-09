//  getOwnPropertyDescriptor / Object.getOwnPropertyDescriptors
//         {
//              value: 'Ujjawal Singh',
//              writable: false,                // Can Object be overwrite or not.
//              enumerable: false,             // Can object be iterated or not.
//              configurable: true
//            }
//  defineProperty / defineProperties
//  Object.entries()
//--------------------------------------------------------------------

console.log(Math.PI);
const piDiscription = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(piDiscription); 
console.log("-------------------------------------------"); 

const myData = {
    name: "Ujjawal Singh",
    roll: 103,
    dept: "ECE",
}

// ----------------------------------------------------------------------------------------------------------------------
console.log(Object.getOwnPropertyDescriptor(myData, "name"));

for (const [key, value] of Object.entries(myData)) {       // Object may or may not be iterateble using loop so we use Object.enteries() to make sure iterateble.
    if(typeof value !== 'function'){
        console.log(`${key} -> ${value}`);
    }
}
// name -> Ujjawal Singh                    // Since enumerable: is enable or true so we can iterate it
// roll -> 103
// dept -> ECE

console.log("---------------------------------------------------");
Object.defineProperty(myData, "name", {
    writable: false,
    enumerable: false,
} );
console.log(Object.getOwnPropertyDescriptor(myData, "name"));

for (const [key, value] of Object.entries(myData)) {       // Object may or may not be iterateble using loop so we use Object.enteries() to make sure iterateble.
    if(typeof value !== 'function'){
        console.log(`${key} -> ${value}`);
    }
}
// roll -> 103                              // Since enumerable: is enable or true so we can iterate it
// dept -> ECE