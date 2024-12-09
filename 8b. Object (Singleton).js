
// singleton
// Accessing Object Properties like Obj.propertyName

// const obj8 = {...obj3, ...obj4}                 // merge using spread
// const obj7 = Object.assign({}, obj3, obj4);     // merge both data and all data will be in newly assign object
// const obj6 = Object.assign(obj3, obj4);       // merge both object and all data to obj3 as it is first or without any empty/newly object
// Object.keys(obj);             // all keys will be taken as array
// Object.values(obj);          // all values will be taken as array
// Object.entries(obj);        // all entries will be taken as array
// --------------------------------------------------------------------------------------------------------------------------------


const obj2 = {}

obj2.id = 25;
obj2.work = "Business";
obj2.type = "food";
obj2.isLoggesIn = false;

console.log(obj2.work);
console.log("-------------------------------------------------");


const bankUser = {                      // Nested object
    email: "abc@gmail.com",
    user: {
        userId: 25,
        userName: "Ujjawal Singh",
        address: {
            state: "Bihar",
            city: "Patna",
            Post: {
                pincode: 800007,
                thana: "Golpalpur"
            }
        }
    }
}

console.log(bankUser);
console.log(bankUser.user.address.Post.thana);
console.log("-------------------------------------------------");


const obj3 = {1: "a", 2: "b"}
const obj4 = {3: "c", 4: "d"}

const obj5 = {obj3, obj4};
console.log(obj5);

const obj6 = Object.assign(obj3, obj4);       // merge both object and all data to obj3 as it is first or without any empty/newly object
console.log(obj3);

const obj7 = Object.assign({}, obj3, obj4);     // merge both data and all data will be in newly assign object
console.log(obj7);

const obj8 = {...obj3, ...obj4}                 // merge using spread
console.log(obj8);
console.log("-------------------------------------------------"); 


//    keys   -----    values   ----------
console.log(Object.keys(bankUser));             // all keys will be taken as array
console.log(Object.values(bankUser));          // all values will be taken as array
console.log(Object.entries(bankUser));        // all entries will be taken as array
