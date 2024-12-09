
// Array.from(HTMLCollectionName)        //*****// -->> To change html collection to array
// .isArray(element)                      // check if present
// Array.of(num1, num2, num3, num4, num5);           // create array with multi no.  


// .shift()                         // Adds element from start
// .unshift()                       // delete elements from start
// slice(range 1, range 2)                  // slice arr will also have those range data but data won't removed from Arr.
// .splice(range 1, range 2)                     //  SPlice remove those range from the array, spliceArr will have that range data 
//                                           while Arr will have remaining data
// .concat(Arr)               // OR // arr5.push(arr6);     // OR//     arr8 = [...arr5, ...arr6]  
// .flat(no 1 to infinty)               // // makes defined number of sub-array to single array



const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3));
console.log(arr.includes(7));
console.log(arr.indexOf(2));


const arr2 = [23, 6, 12, 86, 24];
arr2.push(25);
arr2.push(53);
arr2.pop();

console.log("Arr: ",arr);
console.log("Arr2: ",arr2);
console.log(arr2[3]);
console.log("-----------------------------------------------------");


arr2.unshift(10);
arr2.unshift(20);
console.log("Arr2 with unshift 2 element: ",arr2);      // Adds element from start
arr2.shift();                                           // delete elements from start    
arr2.shift();       
console.log("Arr2 with shift 2 element: ",arr2);
console.log("------------------------------------------------------");


const arr3 = arr2.join();
console.log("Arr3 using join: ", arr3);
console.log("Data type of Arr3: ", typeof arr3);
console.log("------------------------------------------------------");

// slice  -- splice

console.log("Arr at start:           ", arr);

const sliceArr = arr.slice(1,3)                                 // slice arr will also have those range data but data won't removed from Arr.
console.log("sliceArr(1,3):          ", sliceArr);
console.log("Arr after slice(1,3):   ", arr);

const spliceArr = arr.splice(1,3)                           // SPlice remove those range from the array
console.log("spliceArr(1,3):         ", spliceArr);                 // spliceArr will have that range data while Arr will have remaining data
console.log("Arr after splice(1,3):  ", arr);
console.log("------------------------------------------------------");




// concat   ---  flat    ---  multi-single

const arr5 = [1, 2, 3, 4, 5]
const arr6 = [6, 7, 8]

arr7 = arr5.concat(arr6);           // arr5.push(arr6);
console.log("arr7: ", arr7);

const arr8 = [...arr5, ...arr6]         // arr5.push(arr6);
console.log("arr8: ", arr8);

const multiArray = [32, 45, 34, [23, 62], 54, 79, [43, [23, 54, [45, 1]]], 3938];
const mutliTo_SingleArray = multiArray.flat(Infinity);              // makes defined number of sub-array to single array
console.log(mutliTo_SingleArray);
console.log("-------------------------------------------------------------");




// isArray   ---  from    ---  for
console.log(arr5.isArray);

// isArray   ---  from    ---  for
console.log(Array);
console.log(Array.isArray(3));          // check if present
console.log(Array.from(3));                
console.log(Array.from({name: "Patna"}));

let num1 = 15;
let num2 = 25;
let num3 = 35;
let num4 = 45;
let num5 = 55;

const arr9 = Array.of(num1, num2, num3, num4, num5);           // create array with multi no.  
console.log(arr9);

