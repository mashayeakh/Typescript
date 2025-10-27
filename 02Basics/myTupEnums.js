"use strict";
//! tuples means one kind of special array where we know how many elements we have and what type of elements we have in that array.
//!✅ the exact number of elements, and
//!✅ the type of each element — in a fixed order.
Object.defineProperty(exports, "__esModule", { value: true });
//* lets see an example of tuple
var user = ["jhon", 11];
console.log(user);
var user2 = ["doe", 22, true];
console.log(user2);
var newUserInfo = ["masayeakh", 25];
//* you can access the elements using index */  
newUserInfo[1] = 354;
console.log(newUserInfo);
//*tuples have fixed types and length, TypeScript doesn’t fully prevent methods like push() — because under the hood, a tuple is still an array.
newUserInfo.push("hello"); // no error
console.log(newUserInfo);
var newUserInfo2 = ["masayeak23h", 2532];
console.log(newUserInfo2);
