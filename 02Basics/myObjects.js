"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* lets defined an object
var userInfo = {
    name: "john",
    age: 30,
    isActive: true,
};
//* a func
function createUser(_a) {
    var string = _a.name, number = _a.age, boolean = _a.isPaid;
}
createUser({ name: "john", age: 5, isPaid: false });
//* return type of func
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser2(user) {
    return user;
}
createUser2({ name: "doe", age: 25, isActive: true });
//*putting the values
var myVal1 = {
    //values;
    _id: "1234",
    name: "john",
    email: "ja@gmail.com",
    isActive: true,
};
//i can change except _id
myVal1.email = "Doe@gmail.com";
myVal1.isActive = false;
