//! Interface - defining the structure of an object
//! i t tellsts what properties an object should have and their types

//*Example 
interface User{
    name: string;
    age: number;
    isActive: boolean;
}

//*Crteating an object that adheres to the User interface
let user1:User={
    name:"MIP",
    age:30,
    isActive:true, 
}
console.log(user1)

//*Optinal Properties
interface product {
    id: number;
    name:string;
    desc?:string;
}

let phone:product ={
    id:1, 
    name:"iphone 14",
}
console.log(phone)


//* Readonly properties
interface Car {
    readonly vin:string;
    brand:string;
    model:string;
}
let myCar:Car={
    vin:"123ABC",
    brand:"Toyota",
    model:"Corolla",
}
console.log(myCar)  
//? myCar.vin="456DEF"; //Error: Cannot assign to 'vin' because it is a read-only property


//*interface with Function 
interface Login{
    (username:string, psw:string):string // here this login interface defines a func, taking 2 arguments/parameter and it should return a boolean value like true or false. 
}

let auth:Login=(u, p)=>{
    if(u==="admin"&& p==="123"){
        return "WELCOME"
    }
    return "Access Denied"
}

console.log(auth("admin", "123")); //true


//* i can define function as well in an interface

interface MathOp{
    val1:number, 
    val2:number,

    operation():(number);
}

//obj
let result:MathOp={
    val1: 23,
    val2: 32,
    operation(){
        return this.val1 + this.val2;
    }
}

console.log(result.operation());

interface UserProfile{
    email:string, 
    userId:number, 
    readonly dbId:number, 
    googleAuth?:boolean,

    //function
    startTrail():string;
    getCoupon(couponName:string):string
}

const mip:UserProfile={
    email:"m@gmail.com",
    userId: 12,
    dbId: 4567,

    startTrail:()=>{
        return "Trail started";
    },

    getCoupon:(name:string)=>{
        return `Coupon ${name} applied`;
    }
}

console.log(mip.startTrail())
console.log(mip.getCoupon("BLACKFRIDAY"))