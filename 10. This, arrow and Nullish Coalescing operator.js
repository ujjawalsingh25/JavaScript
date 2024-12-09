
const user = {
    userName: "abc@xyz",
    userID: 1234,
    greeting: function(){
        console.log(`Welcome, user ${user.userName}`);
        console.log(`Welcome, user ${this.userID}-${this.userName}`);
        console.log(this);
    }
}
user.greeting()
console.log("-----------------------------------------");

user.userName = "Ujjawal";
user.greeting();

console.log(this);
console.log(typeof this);
console.log("-----------------------------------------");



// const f1 = function(){
//     console.log(typeof this);    
//     console.log(this);
// }
// f1();
// console.log("-----------------------------------------");

//////////////////////      Arrow Operator      ///////////

const addNum = function(n1, n2){
    return n1 + n2;
}
const addNum2 = (n1, n2) => n1 + n2             // it return sum implicitely
const addNum3 = (n1, n2) => { return n1 + n2}       // ***** As scope open so need to return sum explicitely ******* //// 
console.log(addNum2(5,3));
console.log(addNum3(5,7));

const returnObj = () => ({user: "Ujjawal"})
console.log(returnObj());
console.log("-------------------------------------------------");

//////////   Nullish Coalescing Operator  ( ?? )   ///////////
// ******** It gives the value that is suitable for the code to get error free execution 
// *******  or if all data are suitable then first one will be the value.

let val1 = 10 ?? 20;
let val2 = null ?? 20;
let val3 = undefined ?? 20;
let val4 = undefined ?? 20 ?? 8;
let val5 = undefined ?? null;
let val6 = null ?? undefined;
console.table([val1, val2, val3, val4, val5, val6]);