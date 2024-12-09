/////////   Filter /////////////////////

const arr = [11, 12, 13, 14, 15, 16];

const arr2 = arr.filter( (element) => element >=15)
console.log(arr2);                  // Filter array using filter

arr3 = [];
arr.forEach(element => {
    if(element >= 15)   arr3.push(element);
});                                // Filter using condition in for each loop          
console.log(arr3);
console.log("----------------------------------------");


const sportArr = [                                        // Array consisting multiple objects
    {   game: "Cricket",    noOfPlayer: 11  },
    {   game: "Volleyball",    noOfPlayer: 6  },
    {   game: "Football",    noOfPlayer: 10  },
    {   game: "Badminton",    noOfPlayer: 1  }
];

let filterArr = sportArr.filter( (element) => element.game === 'Cricket');
console.log(filterArr);

filterArr = sportArr.filter( (element) => {
    return element.game === 'Volleyball' || element.noOfPlayer == 1
});
console.log(filterArr);
console.log("----------------------------------------");


const arr4 = arr.map( (element) => element * 5).map( (element) => element + 5);
console.log(arr4);
const arr5 = arr.map( (element) => element * 5).map( (element) => element + 5).filter(  (element) => element >= 75);
console.log(arr5);
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");


/////////  Reduce   ///////////
const arr6 = [5, 10, 15, 20];

const arrSum = arr6.reduce( function(accumulator, currentValue){
    console.log(`Accumulator = ${accumulator} and currentValue = ${currentValue}`);
    return accumulator * currentValue;
}, 0)
console.log(arrSum);

const arrSum2  = arr6.reduce( (accu, currVal) => accu + currVal, 0)
console.log(arrSum2);
console.log("-------------------------------");


const sportArr2 = [                                        // Array consisting multiple objects
    {   game: "Cricket",    noOfPlayer: 11  },
    {   game: "Volleyball",    noOfPlayer: 6  },
    {   game: "Football",    noOfPlayer: 10  },
    {   game: "Badminton",    noOfPlayer: 1  }
]; 
const sportArrSum = sportArr2.reduce( (accu, currVal) => accu + currVal.noOfPlayer, 0);
console.log(sportArrSum);