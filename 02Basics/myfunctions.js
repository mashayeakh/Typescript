"use strict";
// !How to define and use functions in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
//*lets add two numbers. 
// function addTwoNumbers(num){ ---> This wont work as TS doesnt know what type num is
//     return num+2;
// }
// addTwoNumbers(7);
//* This should work now
function addTwoNumbers(num) {
    return num + 2;
}
addTwoNumbers(7);
//* lets work with string
function getUpper(str) {
    return str.toUpperCase();
}
getUpper("hola");
//*lets do another function call
function signUpUser(name, email, isPaid) {
    console.log("user signed up successfully");
}
signUpUser("masa", "masa@gmail.com", false);
//*another with arrow func
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("masa", "masa@gmail.com");
