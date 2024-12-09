// console.log(teacherData === loginUser);             // -- False
// console.log(teacherData === Teacher);               // -- False
// console.log(teacherData instanceof Teacher);         // -- True
// console.log(teacherData instanceof logedin);          // -- True

class login {
    constructor(username){
        this.username = username;
    }
    displayLogin(){
        console.log(`User ${this.username} loged in.`);
    }
    
    static createID(username) {                            // static won't allow any inherited function to access
        console.log(`ID created ${username}@123`);
        return `${username}@123`;
    }

    displayID() {
        console.log(`ID: ${login.createID(this.username)}`);
    }
}

class Teacher extends login{                        // Extend to inherit base class
    constructor(username, dept, password){
        super(username);                            // super works as call function that fetch data from base class
        this.dept = dept;                           //  and explicitly gives to this of current class 
        this.password = password;
    }
    addCourse(){
        console.log(`DSA added by ${this.username} from ${this.dept}`);
    }
}

const teacherData = new Teacher("Vishnu", "ECE", 123);     // Object from derived class Teacher inherited from login
teacherData.addCourse();
teacherData.displayLogin();                                 // Also access base class functions
const loginUser = new login("Ujjawal");
loginUser.displayLogin();



// ****** Static **************

// loginUser.createID();            ///**** ERROR ***//  // static always access through class.
login.createID();             // Accessed through class so creates id.
loginUser.displayID();          

// teacherData.createID();      //**** ERROR ***//   //Static won't allow even child to access.


