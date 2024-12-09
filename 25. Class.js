
function user2(name, roll, dept){
    this.name = name;
    this.roll = roll;
    this.dept = dept;
}
user2.prototype.fullRoll = function(){
    return `13000320${this.roll}`;
}
user2.prototype.fullName = function(){
    return `${this.name.toUpperCase()} SINGH`;
}
const myData2 = new user2("Vikram",112,"ECE");
console.log(myData2); 
console.log(myData2.fullRoll()); 
console.log(myData2.fullName()); 
console.log("---------------------------------------------------------------------------------");

// // *******   USING "CLASS - keyword" **********

class user{
    constructor (name, roll, dept){
        this.name = name;
        this.roll = roll;
        this.dept = dept;
    }

    fullRoll(){
        return `13000320${this.roll}`;
    }
    fullName(){
        return `${this.name.toUpperCase()} SINGH`;
    }
}

const myData = new user("Ujjawal",103,"ECE");
console.log(myData); 
console.log(myData.fullRoll()); 
console.log(myData.fullName()); 


