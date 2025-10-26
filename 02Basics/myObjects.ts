//* lets defined an object
let userInfo ={
    name: "john",
    age: 30,
    isActive: true,
}

//* a func - FIX: Destructuring parameter syntax
function createUser({name, age, isPaid}: {name:string, age:number, isPaid:boolean}){}

createUser({name:"john", age: 5, isPaid: false});

//* return type of func
function createCourse():{name:string, price:number}{
    return {name: "reactjs", price: 399};
}

const course = createCourse(); // Use the function

//* type alias - > creating our own types 
type User ={
    name:string; 
    age:number;
    isActive:boolean;
}

function createUser2(user:User):User{
    return user;
}

createUser2({name:"doe", age: 25, isActive: true});

//!Readonly keyword
type userProps ={
    //we want _id should not be changed
    readonly _id:string, //no one can change this value. 
    name:string, 
    email:string,
    isActive:boolean,
}

//*putting the values
let myVal1: userProps={
    //values;
    _id:"1234",
    name:"john",
    email:"ja@gmail.com",
    isActive:true,
}

//i can change except _id
myVal1.email="Doe@gmail.com"
myVal1.isActive=false;
// myVal1._id="123124l" // it will give error  

//! lETS TRY OPTIONAL KEYWORD
type userInfo2 ={
    name:string;
    age:number;
    //this optional keyword means this email may or may not be present
    email?:string, 
}

export {}