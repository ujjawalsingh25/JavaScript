//.table()        -->> to view data as a table.

const accountID = 1625305;
let accountEmail = "ujjawalkumar800007@gmail.com";
var accountPassword = "20283";      // -->> Prefer not to use
accountCity = "Patna";
let accountState;

// accountID = 3         -->> Const cannot be change.

console.log(accountID);

// Multiple Output
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

accountEmail = "ujjawalsingh800007@gmail.com";
accountPassword = "30201"

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
console.log("------------------------------------------------");


let a = 5;
const b = 3;
var c = 25;
console.log("Declare[let, const, var]: ", a, b, c);

{
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner [let, const, var]: ", a, b, c);
}

console.log("Outer [let, const, var]: ", a, b, c);      // Var changes to last declare doesnot depend on global or local scope
console.log("------------------------------------------------");
