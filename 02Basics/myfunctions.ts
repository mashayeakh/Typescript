// !How to define and use functions in TypeScript

//*lets add two numbers. 
// function addTwoNumbers(num){ ---> This wont work as TS doesnt know what type num is
//     return num+2;
// }

// addTwoNumbers(7);

//* This should work now
function addTwoNumbers(num:number){
    return num+2;
}

addTwoNumbers(7);



//* lets work with string
function getUpper(str:string){
    return str.toUpperCase();
}
getUpper("hola");



//*lets do another function call
function signUpUser (name:string, email:string, isPaid:boolean){
    console.log("user signed up successfully");
}

signUpUser("masa","masa@gmail.com", false);


//*another with arrow func
const loginUser=(name:string, email:string, isPaid:boolean=false)=>{

}

loginUser("masa","masa@gmail.com");

//* to make a func that returns explicetly a type like number 
function getValue(val:number):number{
    // return "hellor"; -> not possible as return type is number
    return val;
} 

getValue(9);


//*lets do with the arrow func as well
const getHello =(greet:string):string=>{
    return "Hello "+greet;
}

console.log(getHello("masayeakh"));


//* never type - a function that never returns anything
function throwErr (msg:string):never{
    throw new Error(msg);
}

throwErr("Error occurred");






export {}



