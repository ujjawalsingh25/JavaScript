// Getters and setters allow you to encapsulate the internal state of an object and provide controlled access to its properties.
// Such as in example in the below code wo don't want any other function to get accsess to the password 
// So we use getter and setter where setter sets the data and getter gets the value outside of the class (or to get passed parameter)


// --------  Old Syntax without keyword (Function) ----------------
// function user(email, password){
//     this.email = email;
//     this.password = password;

//     Object.defineProperty(this, "email", {
//         get: function(){
//             return this._email.toUpperCase();        // If use without '_' then both starts to make value email and lead call stack overflow.
//         },
//         set: function(value){
//             this._email = value;             //
//         }
//     })
//     Object.defineProperty(this, "password", {
//         get: function(){
//             return this._password.toUpperCase();
//         },
//         set: function(value){
//             this._password = value;
//         }
//     })
// }

// const myData = new user("ujjawal@800007", 123);
// console.log(myData.email);
// console.log("-----------------------------------------------------------------");



//--------------------- New Syntax  ( to class )  ---------------------------

// class user2{
//     constructor(email, password){
//         this.email = email,
//         this.password = password;
//     }

//     get email(){
//         return `${this._email}@fromUser2`;
//     }
//     set email(value){
//         this._email = value;
//     }

//     get password(){
//         return `${this._password}@abc`;
//     }
//     set password(value){
//         this._password = value;
//     }
// }
// const myData2 = new user2("Ujjawal Singh", 123);
// console.log(myData2);
// console.log(myData2.password);
// console.log("-----------------------------------------------------------------");


//---------------------  In Function  ---------------------------

const userObject3 = {
    _email: "ujjawal@800007",
    _password : 1245,
    
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    },

    get password(){
        return `${this._password}@abc`;
    },
    set password(value){
        this._password = value;
    }
}
const myData3 = Object.create(userObject3);
console.log(myData3);
console.log(myData3.email);                     
// Here we didn't create email, it is (_email(var) or email()(func) ) still taken the value
// Because to Getter & Setter3 , Even though email is not explicitly created in myData3, it inherits the getter and setter from userObject3. When you access myData3.email, it invokes the getter from userObject3, which returns this._email.toUpperCase().
// --------------------------------------------------------------------------------------------------------------------------------
//***************// As Getter & Setter taken the function as Property of class so access the function and takes or sets the value (this.email) from memory    //******************//
// --------------------------------------------------------------------------------------------------------------------------------