//! tuples means one kind of special array where we know how many elements we have and what type of elements we have in that array.
//!✅ the exact number of elements, and
//!✅ the type of each element — in a fixed order.


//* lets see an example of tuple
let user: [string, number]= ["jhon", 11];
console.log(user)

let user2: [string, number, boolean] = ["doe", 22, true]; 
console.log(user2);

//tuple with ttuple type alias.
type userInfo = [string, number];

const newUserInfo:userInfo = ["masayeakh", 25];

//* you can access the elements using index */  
newUserInfo[1]=354
console.log(newUserInfo); 


//*tuples have fixed types and length, TypeScript doesn’t fully prevent methods like push() — because under the hood, a tuple is still an array.

newUserInfo.push("hello"); // no error
console.log(newUserInfo);

//* to prevent the above issue we can use readonly keyword
type userInfo2 = readonly [string, number];
const newUserInfo2:userInfo2 = ["masayeak23h", 2532];

console.log(newUserInfo2)

// newUserInfo2.push("hello"); // error: Property 'push' does not exist on type 'readonly [string, num  ber]'.


export {};