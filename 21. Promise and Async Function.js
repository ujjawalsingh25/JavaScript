// **********************************************************************************
// Do an aysnchronous task
// Resolve inform .then in asyn task when the request or task complete
// DB call, cryptograpghy, Netwotk Call
// **********************************************************************************
// Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. 


const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Aysn task is completed");
        resolve();                               // Resolve to bind it from then in order to consume
    }, 2000)
});
promiseOne.then(function (){                    // then to consume promise
    console.log("PromiseOne Consumed \n --------------------");
});
//  console.log("--- OR -----------------------------------")

new Promise(function(resolve, reject){                  // executed just after the function created
    setTimeout(function(){
        console.log("Aysn task 2 is completed");
        resolve();                              // Resolve to bind it from then in order to consume
    }, 2000)
}).then(function (){
    console.log("PromiseTwo Consumed \n --------------------");
});
// console.log("--- OR -------------------------------------------------")


const PromiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({                           // resolve returns a value (object here)
            name: "Ujjawal",
            address: "Patna",
        })
    }, 2000);
})
PromiseThree.then(function(user){
    console.log(user," \n --------------------");
} )
// console.log("-- OR ------------------------------------------------")


// console.log("***************************************************************");
const PromiseFour = new Promise(function (resolve, reject){
    setTimeout(function(){
        // let error = true;            //  Taken error as such if error comes 
        let error = false;              //  If error do not come then returns object
        if(!error)  resolve({  username: "Ujjawal", address: "Kolkata"})               // Resolve access a JSON or API 
        else    reject('Error!!!')                                                  // and returns the object taken as user
    }, 2000);
})

PromiseFour
.then( (user) => {
    console.log(user);                      // then takes the object and return username from user Database
    return user.username                    // for futher chaining
})
.then((username) => {     
    console.log(username);                 // In futher chaining it takes username and print  
})
.catch(function(error){                   // Takes if error and print
    console.log(error);
})
.finally( () => {
    console.log("It always execute tells either promise resolve or rejected \n --------------------");
})
// console.log("-- OR ------------------------------------------------------------------")



const PromiseFive = new Promise(function (resolve, reject){
    setTimeout(function(){
        // let error = true;            //  Taken error as such if error comes 
        let error = false;              //  If error do not come then returns object
        if(!error)  resolve({  username: "Ujjawal Singh", address: "Patna"})               // Resolve access a JSON or API 
        else    reject('Error In Code!!!')                                                  // and returns the object taken as user
    }, 2000);
})

// async function consumePromiseFive(){
//     const response = await PromiseFive          // await do not solve error or find or print error
//     console.log(response);                      // However since async is used error change is -ve and error occur 
// }                                               // when we print data before it comes but in async it come and we print

async function consumePromiseFive(){
    try {                                       // Try and Catch handle error shows/ print the error or type of error
        const response = await PromiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive();



// // async function getAllUserData() {
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log(Error in fetching);
// //     }
// // }
// // getAllUserData()

// // **** OR
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json() )
// .then( (data) => console.log(data))
// .catch((error) => console.log(error)) 