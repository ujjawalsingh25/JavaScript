
// function setUsername(username){
//     this.username = username;
//     console.log("called");
//     return this.username;
// }
// function createUser(username, roll, dept){               // Constructor

//     const data = new setUsername(username);  // Here we have a object creeted'data' and two properties of createuser ('roll and dept). 
//     this.username = data.username;              // So we need to take username from the objectcreated(data) -> username
//     this.roll = roll                           // AS we need to return the 3 properties of 'createUser' (username, roll, dept).
//     this.dept = dept                               
//     console.log(data);
//     return this;                                        // default return.
// }
// const userOne = new createUser("Ujjawal", 103, "ECE");
// console.log(userOne);
// console.log('------------------------------------------------------');

// called
// setUsername { username: 'Ujjawal' }
// createUser { username: 'Ujjawal', roll: 103, dept: 'ECE' }
// ---------------------------------------------------------------------------------------------------------------




// function setUsername(username) {
//     this.username = username;
//     console.log("called");
//     return this.username;
// }
// function createUser(username, roll, dept) {
   
//     const createdNewObject_inside = new setUsername(username);        // Create an object and set its username using setUsername

//     createdNewObject_inside.roll = roll;        // Use the created object to set roll and dept
//     createdNewObject_inside.dept = dept;         // Taken value/properties in object of function 1(setUsername) 

//     console.log(createdNewObject_inside);
//     return createdNewObject_inside;                  //return the object of function 1(setUsername) 
// }
// const userOne = createUser("Ujjawal", 103, "ECE");
// console.log(userOne);

// called
// 5
// called
// setUsername { username: 'Ujjawal', roll: 103, dept: 'ECE' }
// setUsername { username: 'Ujjawal', roll: 103, dept: 'ECE' }

// ---------------------------------------------------------------------------------------------------------------
// Here the data return but not from createUser but through setUsername. 
// As the object created through setUser constructor so have all properties of seUsername.
// -------------------------------------------------------------------------------------------------------------------


// Here to set the value we need this.username = this.username (i.e this.username (createUser) = this.username(setUsername) ) so hard  to understand this is of which object. So we need to create a new object and pass value. 
//(eg) const data = new setUsername(username) ->   this.username = data.username;      
//    Therefor we use call function,
//call method is a function method that is used to invoke a function with a specified this value and arguments provided individually. 
// The primary purpose of call is to set the value of this explicitly when invoking a function.


//  _______________________________________________________________
// |                                                               |
// |    __________         ________________________________        |
// |   |         |        |                                |       |   
// |   |         |        |                                |       |        let the function 2 need value from function 3 
// |   |         |        |   _______________________      |       |            BUT
// |   |         |        |  |   Call  EC            |     |       |        When function execute in callstack
// |   |         |        |  |    (Function 2 -> 3)  |  ----------------------> After execution the return value and referrence
// |   |         |        |  |_______________________|     |       |                 will over with function.
// |   |         |        |   _______________________      |       |         So, reference the global object
// |   |         |        |  |   Call  EC            |     |       |    & explicitly pass the object to Function 2 using call or  apply.
// |   |         |        |  |    (Function 2)       |     |       |
// |   |         |        |  |_______________________|     |       |
// |   |         |        |   _______________________      |       |
// |   |         |        |  |   Call  EC            |     |       |
// |   |         |        |  |    (Function 1)       |     |       |
// |   |         |        |  |_______________________|     |       |
// |   |         |        |   _______________________      |       |
// |   |         |        |  |   Global  EC          |     |       |
// |   |         |        |  |(Execution Context)    |     |       |
// |   |_________|        |  |_______________________|     |       |
// |                      |________________________________|       |
// |     Heap                                                      |
// |    Memory                       Call Stack                    |
// |_______________________________________________________________|         

function setUsername(username){
    this.username = username;
    console.log("called");
}
function createUser(username, roll, dept){
    setUsername.call(this, username);               // -->> this.username (createUser) = this.username(setUsername)
                                                    // The line means Invoke the setUsername function, setting its this value to the current this value, and pass the username as an argument
    this.roll = roll
    this.dept =dept
}
const userOne = new createUser("Ujjawal", 103, "ECE");
console.log(userOne);
