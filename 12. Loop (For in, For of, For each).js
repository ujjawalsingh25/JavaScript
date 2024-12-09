/////////   For of LOOP /////////////////////

const arr = [12, 2, 45];
const str = "Jai";

for (const i of arr) {
    console.log(i);
}
console.log("----------------------------------");
for (const i of str) {
    console.log(i);
} 
console.log("----------------------------------");

const mpp = new Map()
mpp.set('25', "Ujjawal")
mpp.set('09', "Ankur")
mpp.set('36', "Abhishek")
console.log(mpp);

for (const key of mpp) {
    console.log(key);    
}

for (const [key, value] of mpp) {
    console.log(key, "-->> ", value);    
}
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");


/////////   For in LOOP /////////////////////
// Used for iteration in objects

const obj = {
    name: "Ujjawal",
    roll: "103",
    dept: "ECE",
    sec: "B"
}
console.log("Obj key -->>  Obj value")
for (const key in obj) {
    console.log(`${key} -->>  ${obj[key]}`);
}

for (const key in mpp) {            // For in don't work as map cannot be iterated
    console.log(key); 
}
for (const [key, value] in mpp) {            // For in don't work as map cannot be iterated
    console.log(key, "-->> ", value);    
}
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");


/////////   For each LOOP /////////////////////
//Do not return any value

const myArr = ["bat", "ball", "wicket", "stump", "gloves"];
// myArr.  --->>>                      // Some of the loop properties are directly access by name.(dot)properties(or __proto__)

const returnValue = myArr.forEach(function (index) {
    return index;
} );  console.log(returnValue);                       // *****  For each loop never returns value  *****//


myArr.forEach(function (index) {
    console.log(index);
} )
console.log("-------------------------------------------------");

let data = "";                                 //*************//
myArr.forEach(index => {                             //*************//
    data = data + " " + index;             //*************//
    return data;
}); console.log(data);
console.log("--------------------------------------------------");

myArr.forEach((element, index, myArr) => {
    console.log(element, index, myArr);
});
console.log("---------------------------------------------------------");

const sportArr = [                                        // Array consisting multiple objects
    {   game: "Cricket",    noOfPlayer: 11  },
    {   game: "Volleyball",    noOfPlayer: 6  },
    {   game: "Football",    noOfPlayer: 10  },
    {   game: "Badminton",    noOfPlayer: 1  }
]

sportArr.forEach( (obj) => {        // All objects in the array will be iterated through obj.
    console.log(obj.game);
});