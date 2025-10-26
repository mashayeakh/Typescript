//!Union means when you dont know the type of variable is coming. 

//* working 
let scror:number =33;
scror=44 


//*working as well.
let scror2:string = "23";
scror2="55"

//? but what if you want to assign both number and string types to a variable. You can use union type. Or you dont know what type is coming.

//* here union type is used
let sc:number | string = 33;

//* you can assign number or string type to sc variable */
sc = "55";
// sc = 77;

console.log(typeof sc)

console.log(sc);

//? lets talk about a secnario where there will be multiple types of user like user and admin and someday i might be an admin at that time i want to allow both types of user and admin. so we can use union type here as well

type user ={
    name:string;
    email:string;
    id:number;
}

type admin ={
    adminName:string;
    email:string;
    id:number;
}

//*lets assume the person is masayeakh, initiaally masayeakh is an user but later he becomes an admin as well. so we can use union type here

let masayeakh:user| admin ={
    name:"masayeakh",
    email:"m@gmail.com",
    id:101,
}
 //* its totally working as user type now its time to becoming an admin

    masayeakh={
    adminName:"masayeakh",
    email:"m@admin.com",
    id:101,
    }

    console.log(masayeakh);

//* Let's see another example of union type with function; like we take a parameter which can be either string or number and based on that we will return some value; 

function getId(id:number | string){
    console.log("ID ", id)
    console.log(typeof id) //string
}

getId(101);
getId("202");

function getId3(id:number | string){
    if(typeof id === "number"){
        console.log("ID is number:", id+2)
    }else{
        console.log("ID is string:", id.concat(" is your id"))
    }
}

getId3(67);
getId3("86");

//* lets work with the array of union types

const myData:number[] = [1,2,3,4,5]; // okay to define array of numbers


const myData2:string[] = ["1","2","3","4"]; // okay to define array of array

//? IF i want to define an array which can hold both number and string type?

//! const myData3: number | string [] =[1,2,3,"4","5"]; // it is working but ts infers the type as (string | number)[]

//! const myData4: number[] | string [] =[1,2,3,"4","5"]; // it is working also but ts infers the type as (string[] | number)[]

const myData5:(number | string)[] =[1,2,3,"4","5"]; // this is the correct way to define an array which can hold both number and string type

console.log(myData5)


//*strict assignment

let pi:3.14 =3.14; // pi can only hold the value 3.14 
// pi=3.15; // error-> this is not a good way to store 

//* this is the way to do that
let seatAllocation:3 | 5 | 7; // seatAllocation can only hold the value 3,5,7
seatAllocation=5;// perfect
seatAllocation=7;// perfect
// seatAllocation=4;//-> error



export {}






